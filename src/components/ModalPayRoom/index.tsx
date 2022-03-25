import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Stripe, StripeCardElement } from '@stripe/stripe-js';
import Button from 'components/Button';
import CardForm from 'components/CardForm';
import { CardValues } from 'components/CardForm/types';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import Modal from 'components/Modal';
import * as Text from 'components/Text';
import React, { useState } from 'react';
import ModalCreateCard from 'views/ModalCreateCard';
import { useRoomContext } from 'views/Room/RoomContext';
import { Bottom, ImgSlider, PriceContainer, ScrollableContent, SliderContainer, StyledInlineCard } from './elements';

export type ModalPayRoomSubmitFn = (stripe: Stripe, cardValues: CardValues) => void;

const initialCardValues: CardValues = {
    error: undefined,
    cardComplete: false,
    processing: false,
    firstName: '',
    lastName: '',
    card: null,
};

type Props = {
    title: string;
    subtitle: string;
    isOpen: boolean;
    isLoading: boolean;
    isSubscription: boolean;
    onCancel: () => void;
    onSubmit: ModalPayRoomSubmitFn;
};
export default function ModalPayRoom(props: Props) {
    const { room, customer } = useRoomContext();

    const [isChangingCard, setIsChangingCard] = useState(false);
    const [cardValues, setCardValues] = useState(initialCardValues);
    const [formErrors, setFormErrors] = useState({ firstName: '', lastName: '' });

    const hasPaymentMethod = !!customer?.defaultPaymentMethod?.id;
    const roomPrice = room?.price;

    const stripe = useStripe();
    const elements = useElements();

    const validateForm = (): { ok: boolean; card: StripeCardElement | null } => {
        // No validation if user already has pm
        if (hasPaymentMethod) return { ok: true, card: null };
        if (!elements || !stripe) {
            return { ok: false, card: null };
        }

        const errFieldRequired = 'This is a required field';
        const ok = [cardValues.firstName, cardValues.lastName].filter((v) => v === '').length === 0 && !cardValues.error;

        setFormErrors({
            firstName: cardValues.firstName ? '' : errFieldRequired,
            lastName: cardValues.lastName ? '' : errFieldRequired,
        });

        // Set card element
        const card = elements.getElement(CardElement);
        return { ok, card };
    };

    const handleSubmit = () => {
        const { ok, card } = validateForm();
        if (!ok) {
            return;
        }

        props.onSubmit(stripe!, { ...cardValues, card });
    };

    return roomPrice ? (
        <>
            <ModalCreateCard isOpen={isChangingCard} onCancel={() => setIsChangingCard(false)} />

            <Modal isOpen={props.isOpen && !isChangingCard} onCancel={props.onCancel} title={props.title} subtitle={props.subtitle}>
                <ScrollableContent>
                    <SliderContainer>
                        <ImgSlider url="/slide_avatars_1.png" direction="RtoL" pos={0} />
                        <ImgSlider url="/slide_avatars_2.png" direction="LtoR" pos={1} />
                    </SliderContainer>
                    {hasPaymentMethod ? (
                        <StyledInlineCard onChangeCardClick={() => setIsChangingCard(true)} />
                    ) : (
                        <CardForm
                            stripe={stripe}
                            elements={elements}
                            cardValues={cardValues}
                            setCardValues={setCardValues}
                            formErrors={formErrors}
                        />
                    )}

                    <Bottom>
                        <PriceContainer>
                            <Text.Regular>Price</Text.Regular>
                            <FlexContainer>
                                <Text.RegularBig weight="bold">${roomPrice / 100}</Text.RegularBig>
                                {props.isSubscription && (
                                    <Text.Small mt={2} mr={1} weight="bold">
                                        /mo
                                    </Text.Small>
                                )}
                            </FlexContainer>
                        </PriceContainer>
                        <Button
                            loading={props.isLoading}
                            icon={<Icon name={IconName.Shield} size={IconSize.SM} />}
                            type="secondary"
                            fluid
                            size="medium"
                            squared
                            label="Pay"
                            onClick={handleSubmit}
                        />
                    </Bottom>
                </ScrollableContent>
            </Modal>
        </>
    ) : null;
}
