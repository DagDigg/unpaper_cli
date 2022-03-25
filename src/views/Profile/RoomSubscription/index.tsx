import { useElements, useStripe } from '@stripe/react-stripe-js';
import { PaymentIntentStatus, RoomSubscription as RoomSubscriptionPB } from 'api/proto/v1/payment_pb';
import Button from 'components/Button';
import CardForm from 'components/CardForm';
import { CardValues } from 'components/CardForm/types';
import Modal from 'components/Modal';
import * as Text from 'components/Text';
import * as paymentSelectors from 'modules/payment/selectors';
import * as paymentActions from 'modules/payment/actions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InlineCard from 'components/InlineCard';
import ModalCreateCard from 'views/ModalCreateCard';
import { addToast } from 'services/toasts';

const initialCardValues: CardValues = {
    error: undefined,
    cardComplete: false,
    processing: false,
    firstName: '',
    lastName: '',
    card: null,
};

type Props = {
    subsc: RoomSubscriptionPB.AsObject;
    statusStr: string;
};
export default function RoomSubscription(props: Props) {
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [cardValues, setCardValues] = useState(initialCardValues);
    const [isChangingCard, setIsChangingCard] = useState(false);
    const [formErrors, setFormErrors] = useState({ firstName: '', lastName: '' });
    const customer = useSelector(paymentSelectors.selectCustomer);
    const hasPaymentMethod = customer?.defaultPaymentMethod;
    const piStatus = props.subsc.latestInvoice?.paymentIntent?.status;
    const latestPaymentFailed =
        piStatus === PaymentIntentStatus.Enum.REQUIRES_ACTION || piStatus === PaymentIntentStatus.Enum.REQUIRES_PAYMENT_METHOD;

    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const validateForm = () => {
        if (hasPaymentMethod) return true;

        const errFieldRequired = 'This is a required field';
        const ok = [cardValues.firstName, cardValues.lastName].filter((v) => v === '').length === 0;

        setFormErrors({
            firstName: cardValues.firstName ? '' : errFieldRequired,
            lastName: cardValues.lastName ? '' : errFieldRequired,
        });

        return ok;
    };

    const handleSubmit = () => {
        const ok = validateForm();
        if (!ok || !stripe || !elements) {
            return;
        }
        if (!latestPaymentFailed) {
            addToast({ type: 'error', label: 'An unexpected error occurred.' });
        }
        if (latestPaymentFailed) {
            // An error occurred during last transaction
            dispatch(paymentActions.subscribeToRoom.request({ cardValues: { ...cardValues, stripe }, roomId: props.subsc.roomId }));
        }
    };

    return (
        <>
            <Text.Title>Subscription for: {props.subsc.id}</Text.Title>
            <Text.Small>{props.statusStr}</Text.Small>

            {latestPaymentFailed && (
                <>
                    <ModalCreateCard isOpen={isChangingCard} onCancel={() => setIsChangingCard(false)} />

                    <Modal
                        isOpen={paymentModalOpen && !isChangingCard}
                        onCancel={() => setPaymentModalOpen(false)}
                        title="Retry the payment"
                    >
                        {hasPaymentMethod ? (
                            <InlineCard onChangeCardClick={() => setIsChangingCard(true)} />
                        ) : (
                            <CardForm
                                cardValues={cardValues}
                                elements={elements}
                                formErrors={formErrors}
                                setCardValues={setCardValues}
                                stripe={stripe}
                            />
                        )}
                        <Button size="medium" label={`Pay ${props.subsc.latestInvoice!.amountDue * 100}`} onClick={handleSubmit} />
                    </Modal>

                    <Text.Regular>
                        There have been an issue with your latest payment. Please try changing your payment details and retry the
                        transaction
                    </Text.Regular>

                    <Button size="medium" label="Retry the payment" onClick={() => setPaymentModalOpen(true)} />
                </>
            )}
        </>
    );
}
