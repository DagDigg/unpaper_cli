import { ChatMessage } from 'api/proto/v1/chat_pb';
import { RoomView } from 'modules/main/chat/types';
import React from 'react';
import { RouteComponentProps } from 'react-router';

function Room(_: RouteComponentProps) {
    //     const history = useHistory();
    //     const roomId = getRoomIdFromURL();
    //     const messages = useSelector(chatSelectors.selectMessagesByRoomId(roomId));
    //     const room = useSelector(chatSelectors.selectRoomById(roomId));
    //     const roomOwner = useSelector(chatSelectors.selectRoomOwner(roomId));
    //     const customer = useSelector(paymentSelectors.selectCustomer);
    //     const roomAccess = useSelector(mainChatSelectors.hasAccessToRoom(roomId));
    //     const roomOwnerInfo = useSelector(mainUsersSelectors.selectExtUserInfo(roomOwner ?? ''));
    //     const roomView = useSelector(mainChatSelectors.selectRoomView);
    //     const roomSubscription = useSelector(paymentSelectors.selectRoomSubscriptionByRoomId(roomId));

    //     const dispatch = useDispatch();

    //     const goBack = useCallback(() => history.push('..'), [history]);

    //     const getMessages = useCallback(() => {
    //         const client = Client.get();
    //         const channel = roomId;
    //         const req = new GetMessagesRequest();
    //         req.setChannel(channel);
    //         window.scrollTo(0, 1);

    //         const msgStream: ClientReadableStream<unknown> = client.getMessages(req);
    //         msgStream.on('data', (res: any) => {
    //             const rawMsg: ChatMessage = res;
    //             const msg: ChatMessage.AsObject = rawMsg.toObject();
    //             if (rawMsg.getAudio()) {
    //                 // We want audio as bytes
    //                 msg.audio = { bytes: rawMsg.getAudio()?.getBytes() ?? '' };
    //             }
    //             dispatch(chatActions.addMessage({ roomId, msg }));
    //         });

    //         msgStream.on('error', (err) => {
    //             throw new Error(err.message ? err.message : 'an error occurred');
    //         });
    //     }, [roomId, dispatch]);

    //     useEffect(() => {
    //         roomOwner && dispatch(mainUsersActions.getExtUserInfo.request({ userId: roomOwner, username: '' }));
    //         dispatch(mainChatActions.startRoomAuthFlow.request({ roomId }));
    //     }, [dispatch, roomId, roomOwner]);

    //     useEffect(() => {
    //         roomAccess === RoomAuthorization.Enum.AUTHORIZED && getMessages();
    //     }, [roomAccess, getMessages]);

    //     return (
    //         <RoomContext.Provider value={{ room, roomOwnerInfo, customer, roomView, roomSubscription }}>
    //             {roomView === RoomView.LOADING ? <Loader /> : <Content goBack={goBack} roomView={roomView} messages={messages} />}
    //         </RoomContext.Provider>
    //     );
    return <></>;
}

function Content({ roomView, messages, goBack }: { roomView: RoomView; messages: ChatMessage.AsObject[]; goBack: () => void }) {
    return <></>;
}

//    {/* User is authorized */}
//     {roomView === RoomView.SHOW_CHAT && <Chat messages={messages} />}

//     {/* User need to pay in order to join room */}
//     {[RoomView.SHOW_PAYMENT_MODAL, RoomView.SHOW_SUBSCRIPTION_MODAL].includes(roomView) && <ModalPayRoom />}

//     {/* User can't join room */}
//     {roomView === RoomView.SHOW_UNJOINABLE_ROOM_MODAL && (
//         <Modal title="This is a private room" subtitle="Only allowed members can join the conversation" isOpen onCancel={() => {}}>
//             <FlexContainer flexDirection="column">
//                 <Icon name={IconName.DuoLock} size={IconSize.MX} color="secondary" />
//                 <div style={{ width: '100%', padding: '0 36px' }}>
//                     <Button type="secondary" squared fluid mt={36} size="medium" label="Got it" onClick={goBack} />
//                 </div>
//             </FlexContainer>
//         </Modal>
//     )}

export default React.memo(Room);
