import { Stripe } from '@stripe/stripe-js';
import { getRoomIdFromURL } from 'common/urlUtils';
import { CardValues } from 'components/CardForm/types';
import { RoomView } from 'modules/main/chat/types';
import * as mainPaymentActions from 'modules/main/payment/actions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useRoomContext } from 'views/Room/RoomContext';
import OneTime from './OneTime';
import Subscription from './Subscription';

function ModalPayRoom() {
    const { customer, roomView } = useRoomContext();
    const roomId = getRoomIdFromURL();
    const hasPaymentMethod = !!customer?.defaultPaymentMethod;

    const dispatch = useDispatch();

    const handlePayRoom = (stripe: Stripe, cardValues: CardValues) =>
        dispatch(mainPaymentActions.payRoomEntrance.request({ roomId, cardDetails: { ...cardValues, stripe } }));

    const handleSubscribeToRoom = (stripe: Stripe, cardValues: CardValues) =>
        dispatch(mainPaymentActions.subscribeToRoom.request({ roomId, cardValues: { ...cardValues, stripe } }));

    const Content = () => {
        if ([RoomView.SHOW_PAYMENT_MODAL].includes(roomView)) {
            return <OneTime hasPaymentMethod={hasPaymentMethod} onSubmit={handlePayRoom} />;
        }
        if ([RoomView.SHOW_SUBSCRIPTION_MODAL].includes(roomView)) {
            return <Subscription hasPaymentMethod={hasPaymentMethod} onSubmit={handleSubscribeToRoom} />;
        }

        return null;
    };

    return <Content />;
}

export default React.memo(ModalPayRoom);
