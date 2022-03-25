import { segments } from 'common/paths';
import { AwardId } from 'components/Award/types';
import Spinner, { SpinnerDot } from 'components/Spinner';
import InputBar from 'components/InputBar';
import Loader from 'components/Loader';
import ModalAwards from 'components/ModalAwards';
import RoomHeader from 'components/RoomHeader';
import { Base } from 'components/Text/elements';
import * as authSelectors from 'modules/auth/selectors';
import * as chatActions from 'modules/chat/actions';
import * as chatSelectors from 'modules/chat/selectors';
import * as mainChatActions from 'modules/main/chat/actions';
import * as mainChatSelectors from 'modules/main/chat/selectors';
import { ChatView } from 'modules/main/chat/types';
import * as paymentSelectors from 'modules/payment/selectors';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useRouteMatch } from 'react-router';
import styled from 'styled-components';
import ModalCreateCard from 'views/ModalCreateCard';
import ModalMakeDonation from 'views/ModalMakeDonation';
import Recording from 'views/Recording';
import MessagesList from './MessagesList';

const ChatContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const MessagesContainer = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 80px;
    padding-top: 28px;
`;

const LoadMoreText = styled(Base).attrs({ scale: 'small', color: 'secondary' })`
    text-align: center;
    cursor: pointer;
`;

const StyledSpinner = styled(Spinner)`
    ${SpinnerDot}:before {
        background-color: ${({ theme }) => theme.secondary};
    }
`;

const LoadMore = ({ shouldShowLoader, onClick }: { shouldShowLoader: boolean; onClick: React.MouseEventHandler<HTMLDivElement> }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 18, margin: '12px 0' }}>
            {shouldShowLoader ? <StyledSpinner /> : <LoadMoreText onClick={onClick}>Load more</LoadMoreText>}
        </div>
    );
};

// const getMockedUsers = (): ChatUser.AsObject[] => {
//     const res: ChatUser.AsObject[] = [];
//     for (let i = 0; i < 100; i++) {
//         const usr = i === 0 ? 'LoremIpsum_98' : 'JaneDoe' + String(Math.random() * 1000);
//         res.push({ id: String(i), username: usr, imageUrl: '' });
//     }
//     return res;
// };

const Chat = React.memo<RouteComponentProps>(() => {
    const { params }: any = useRouteMatch();
    const conversationId = params[segments.conversationId];
    const conversation = useSelector(chatSelectors.selectConversationById(conversationId));
    const chatStatus = useSelector(chatSelectors.selectModuleStatus);
    const { hasMore, messagesList } = useSelector(chatSelectors.selectConversationMessages(conversationId));
    const user = useSelector(authSelectors.selectUser);
    const customer = useSelector(paymentSelectors.selectCustomer);
    const msgContainerRef = useRef<HTMLDivElement>(null);
    const currChatView = useSelector(mainChatSelectors.selectChatView);
    const [showRecordingView, setShowRecordingView] = useState(false);
    const [latestMessageId, setLatestMessageId] = useState('');
    const [shouldAnimate, setShouldAnimate] = useState(true);

    const shouldScrollToMsg = useCallback(() => {
        const size = msgContainerRef.current?.getBoundingClientRect();
        return size && size.height > window.innerHeight;
    }, [msgContainerRef]);

    const scrollToLastMessage = () => window.scrollTo({ top: msgContainerRef?.current?.scrollHeight ?? 0, behavior: 'smooth' });
    const dispatch = useDispatch();

    const sendAward = useCallback(
        (id: AwardId) => {
            dispatch(chatActions.sendAward.request({ awardId: id, channel: conversationId, username: user?.username ?? '' }));
        },
        [dispatch, conversationId, user],
    );

    const sendDonation = useCallback(
        (amt: number) => {
            dispatch(chatActions.sendDonation.request({ amount: amt, channel: conversationId, username: user?.username ?? '' }));
            dispatch(mainChatActions.setChatView(ChatView.IDLE));
        },
        [dispatch, conversationId, user],
    );

    const showRecording = () => {
        setShowRecordingView(true);
    };
    const hideRecording = useCallback(() => {
        dispatch(mainChatActions.setChatView(ChatView.IDLE));
        setShowRecordingView(false);
    }, [dispatch]);

    const sendAudio = useCallback(
        (bytes: Uint8Array) => {
            dispatch(chatActions.sendAudio.request({ audio: bytes, channel: conversationId, username: user?.username ?? '' }));
            hideRecording();
        },
        [dispatch, conversationId, user, hideRecording],
    );

    const getPreviousMessages = useCallback(() => {
        dispatch(chatActions.getMessages.request({ channel: conversationId }));
    }, [dispatch]);

    const sendMessage = useCallback(
        (v: string) => {
            dispatch(chatActions.sendMessage.request({ channel: conversationId, content: v, username: user?.username ?? '' }));
        },
        [dispatch, conversationId, user],
    );

    const showActiveUsers = useCallback(() => {
        dispatch(mainChatActions.setChatView(ChatView.SHOW_ACTIVE_USERS));
    }, [dispatch]);
    // const hideActiveUsers = useCallback(() => {
    //     dispatch(mainChatActions.setChatView(ChatView.IDLE));
    // }, [dispatch]);

    useEffect(() => {
        if (conversationId) {
            dispatch(chatActions.getConversation.request({ conversationId }));
        }
    }, [dispatch, conversationId]);

    useEffect(() => {
        if (chatStatus === 'READY') {
            dispatch(chatActions.listenForMessages.request({ channel: conversationId }));
        }
    }, [dispatch, conversationId, chatStatus]);

    useEffect(() => {
        if (conversation) {
            dispatch(chatActions.getMessages.request({ channel: conversationId }));
        }
    }, [dispatch, conversation, conversationId]);

    useEffect(() => {
        if (messagesList.length) {
            if (latestMessageId != messagesList[messagesList.length - 1].id) {
                // New message received, or first time loading messages
                setLatestMessageId(messagesList[messagesList.length - 1].id);
                setShouldAnimate(true);
                return;
            }

            // Old messages loaded
            setShouldAnimate(false);
        }
    }, [latestMessageId, messagesList]);

    useEffect(() => {
        if (shouldScrollToMsg()) scrollToLastMessage();
    }, [shouldScrollToMsg]);

    return (
        <ChatContainer>
            {['READY', 'LOADING_PREVIOUS'].includes(chatStatus) ? (
                <>
                    <ModalAwards
                        isOpen={currChatView === ChatView.SHOW_AWARDS_MODAL}
                        onCancel={() => dispatch(mainChatActions.setChatView(ChatView.IDLE))}
                        onSelectAward={() => {}}
                    />
                    <ModalCreateCard
                        isOpen={currChatView === ChatView.SHOW_CHANGE_CARD_MODAL}
                        onCancel={() => dispatch(mainChatActions.setChatView(ChatView.SHOW_DONATION_MODAL))}
                    />
                    <ModalMakeDonation
                        isOpen={currChatView === ChatView.SHOW_DONATION_MODAL}
                        onCancel={() => dispatch(mainChatActions.setChatView(ChatView.IDLE))}
                        onSendDonation={sendDonation}
                    />
                    {/* <ActiveUsers users={getMockedUsers()} isVisible={currChatView === ChatView.SHOW_ACTIVE_USERS} onClose={hideActiveUsers} /> */}
                    <RoomHeader onShowActiveUsers={showActiveUsers} participants={conversation?.participantsMap} currentUserId={user?.id} />
                    <MessagesContainer ref={msgContainerRef}>
                        {hasMore && <LoadMore shouldShowLoader={chatStatus === 'LOADING_PREVIOUS'} onClick={getPreviousMessages} />}

                        {messagesList ? (
                            <MessagesList shouldAnimate={shouldAnimate} messagesList={messagesList} userId={user?.id} />
                        ) : (
                            <></>
                        )}
                    </MessagesContainer>
                    <Recording isVisible={showRecordingView} onSubmit={sendAudio} onClose={hideRecording} />
                    {!showRecordingView && (
                        <InputBar onSubmit={sendMessage} onSendAward={sendAward} customer={customer} onShowRecordingView={showRecording} />
                    )}
                </>
            ) : (
                <Loader />
            )}
        </ChatContainer>
    );
});

export default Chat;
