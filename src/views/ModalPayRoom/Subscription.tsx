import { PaymentIntentStatus } from 'api/proto/v1/payment_pb';
import Modal from 'components/Modal';
import RoomPaymentModal, { ModalPayRoomSubmitFn } from 'components/ModalPayRoom';
import * as mainChatActions from 'modules/main/chat/actions';
import * as mainChatSelectors from 'modules/main/chat/selectors';
import { ModalPayRoomStep } from 'modules/main/chat/types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoomContext } from 'views/Room/RoomContext';

type Props = {
    hasPaymentMethod: boolean;
    onSubmit: ModalPayRoomSubmitFn;
};
function Subscription(props: Props) {
    const { room, roomSubscription } = useRoomContext();
    const step = useSelector(mainChatSelectors.selectModalPayRoomStep);
    const subscriptionModalOpen = [ModalPayRoomStep.IDLE, ModalPayRoomStep.SUBSCRIPTION_LOADING].includes(step);
    const pollingModalOpen = [ModalPayRoomStep.SUBSCRIPTION_POLLING].includes(step);
    const piStatus = roomSubscription?.latestInvoice?.paymentIntent?.status;
    const labels = getLabelsByPIStatus(piStatus);

    const dispatch = useDispatch();
    useEffect(() => {
        // Poll room access on processing payments
        if (piStatus === PaymentIntentStatus.Enum.PROCESSING && step !== ModalPayRoomStep.SUBSCRIPTION_POLLING) {
            dispatch(mainChatActions.pollRoomAccessCheck.request({ roomId: room?.id ?? '' }));
        }
    });

    return (
        <>
            <RoomPaymentModal
                title={labels.title}
                subtitle={labels.subtitle}
                isOpen={subscriptionModalOpen}
                isLoading={step === ModalPayRoomStep.SUBSCRIPTION_LOADING}
                isSubscription
                onCancel={() => {}} // TODO
                onSubmit={props.onSubmit}
            />

            <Modal
                isOpen={pollingModalOpen}
                onCancel={() => {}}
                title="Just a moment"
                subtitle="Please wait until subscription has been confirmed. It should take a few seconds."
            >
                Loading...
            </Modal>
        </>
    );
}

function getLabelsByPIStatus(status?: PaymentIntentStatus.Enum) {
    switch (status) {
        case PaymentIntentStatus.Enum.REQUIRES_ACTION:
            return {
                title: 'Confirm your payment method',
                subtitle: 'Your bank requires a confirmation in order to attempt the payment',
            };
        case PaymentIntentStatus.Enum.REQUIRES_PAYMENT_METHOD:
            return {
                title: 'Something went wrong during the last payment',
                subtitle: 'Please try again with a different card',
            };
        case PaymentIntentStatus.Enum.PROCESSING:
            return {
                title: 'Processing payment',
                subtitle: 'Please wait until the payment succeeds.',
            };
        case undefined: // No payment intent on the room, the user has never subscribed
            return {
                title: 'The room requires a subscription',
                subtitle: 'Subscribe to the room and get access to it',
            };
        default:
            return { title: '', subtitle: '' };
    }
}

export default React.memo(Subscription);
