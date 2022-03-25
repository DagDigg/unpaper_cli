import RoomPaymentModal, { ModalPayRoomSubmitFn } from 'components/ModalPayRoom';
import React from 'react';
import { useSelector } from 'react-redux';
import * as mainChatSelectors from 'modules/main/chat/selectors';
import { ModalPayRoomStep } from 'modules/main/chat/types';

type Props = {
    hasPaymentMethod: boolean;
    onSubmit: ModalPayRoomSubmitFn;
};
export default function OneTime(props: Props) {
    const step = useSelector(mainChatSelectors.selectModalPayRoomStep);

    return (
        <RoomPaymentModal
            title="The room requires a one time payment"
            subtitle="By paying the room entry price, you'll be able to join it"
            isOpen={true} // TODO
            isLoading={step === ModalPayRoomStep.PAYMENT_LOADING} // TODO
            isSubscription={false}
            onCancel={() => {}} // TODO
            onSubmit={props.onSubmit}
        />
    );
}
