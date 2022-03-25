import { useElements, useStripe } from '@stripe/react-stripe-js';
import Button from 'components/Button';
import CardForm from 'components/CardForm';
import { CardValues } from 'components/CardForm/types';
import Modal from 'components/Modal';
import PriceInput from 'components/PriceInput';
import * as mainChatActions from 'modules/main/chat/actions';
import { ChatView } from 'modules/main/chat/types';
import * as paymentActions from 'modules/payment/actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import InlineCard from '../components/InlineCard';
import { useRoomContext } from './Room/RoomContext';

const StyledInlineCard = styled(InlineCard)`
    border: none;
`;

const initialCardValues: CardValues = {
    error: undefined,
    cardComplete: false,
    processing: false,
    firstName: '',
    lastName: '',
    card: null,
};

type Props = {
    isOpen: boolean;
    onCancel: () => void;
    onSendDonation: (amt: number) => void;
};
export default function ModalMakeDonation(props: Props) {
    const [cardValues, setCardValues] = useState(initialCardValues);
    const [formErrors, setFormErrors] = useState({ firstName: '', lastName: '' });
    const [amt, setAmt] = useState(1);
    const { customer, roomOwnerInfo } = useRoomContext();
    const hasPaymentMethod = !!customer?.defaultPaymentMethod;

    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const validateForm = () => {
        // No validation if user already has pm
        if (hasPaymentMethod) return true;

        const errFieldRequired = 'This is a required field';
        const ok = [cardValues.firstName, cardValues.lastName].filter((v) => v === '').length === 0;

        setFormErrors({
            firstName: cardValues.firstName ? '' : errFieldRequired,
            lastName: cardValues.lastName ? '' : errFieldRequired,
        });

        return ok;
    };

    const handleDonate = () => {
        const ok = validateForm();
        if (!ok || !stripe || !elements) {
            return;
        }

        if (!hasPaymentMethod) {
            return dispatch(
                paymentActions.makeDonation.request({
                    stripe,
                    cardDetails: {
                        card: elements.getElement('card'),
                        firstName: cardValues.firstName,
                        lastName: cardValues.lastName,
                        stripe,
                    },
                    amount: amt * 100,
                    receiverUserId: roomOwnerInfo?.id ?? '',
                    onSuccess: props.onSendDonation,
                }),
            );
        } else {
            return dispatch(
                paymentActions.makeDonation.request({
                    stripe,
                    pmId: customer?.defaultPaymentMethod?.id ?? '',
                    amount: amt * 100,
                    receiverUserId: roomOwnerInfo?.id ?? '',
                    onSuccess: props.onSendDonation,
                }),
            );
        }
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onCancel={props.onCancel}
            title="Show your support to the author"
            subtitle="Make a donation, and let anyone know it!"
        >
            <PriceInput amt={amt} onChange={(amt) => setAmt(amt)} mb={8} mt={44} />

            {hasPaymentMethod ? (
                <StyledInlineCard onChangeCardClick={() => dispatch(mainChatActions.setChatView(ChatView.SHOW_CHANGE_CARD_MODAL))} />
            ) : (
                <CardForm
                    stripe={stripe}
                    elements={elements}
                    cardValues={cardValues}
                    setCardValues={setCardValues}
                    formErrors={formErrors}
                />
            )}

            <Button mt={28} type="secondary" fluid size="medium" squared label="Donate" onClick={handleDonate} />
        </Modal>
    );
}
