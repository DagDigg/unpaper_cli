import { Conversation, ConversationParticipant } from 'api/proto/v1/chat_pb';
import BasicIconButton, { StyledIcon } from 'components/BasicIconButton';
import Button from 'components/Button';
import ConversationRow from 'components/ConversationRow';
import FlexContainer from 'components/FlexContainer';
import { IconName } from 'components/Icon/types';
import Searchbar from 'components/Searchbar';
import TopTitle from 'components/TopTitle';
import * as chatActions from 'modules/chat/actions';
import * as chatSelectors from 'modules/chat/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, useHistory } from 'react-router';
import styled from 'styled-components';
import * as authSelectors from 'modules/auth/selectors';
import CreateConversationModal from './CreateConversationModal';
import * as Text from 'components/Text';
import { isMobile } from 'react-device-detect';

const StyledSearchbar = styled(Searchbar)`
    flex: 1;
`;

const StyledBasicIconButton = styled(BasicIconButton)`
    margin-left: 8px;
    width: 44px;
    height: 44px;
    background-color: ${({ theme }) => theme.secondary + '1f'};
    &:hover {
        background-color: ${({ theme }) => theme.secondary};
        ${StyledIcon} > path, ${StyledIcon} > rect, ${StyledIcon} > circle {
            fill: ${({ theme }) => theme.white};
        }
    }
`;

export default function Conversations(_: RouteComponentProps) {
    const [query, setQuery] = useState('');
    const [createConversationModalVisible, setCreateConversationModalVisible] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const conversations = useSelector(chatSelectors.selectConversations);
    const user = useSelector(authSelectors.selectUser);

    const handleCreateConversation = () => {
        setCreateConversationModalVisible(true);
    };

    const handleStartConversation = ({ userId, username }: { userId: string; username: string }) => {
        dispatch(chatActions.createConversation.request({ username, userId }));
    };

    useEffect(() => {
        dispatch(chatActions.getConversations.request({ conversationId: '' }));
    }, [dispatch]);

    const goToConversation = (conversationId: string) => history.push(`/conversations/${conversationId}`);

    return (
        <>
            <TopTitle scrollEnabled goBackEnabled={isMobile} label="Conversations" />

            <CreateConversationModal
                isVisible={createConversationModalVisible}
                onClose={() => setCreateConversationModalVisible(false)}
                onStartConversation={handleStartConversation}
            />

            <FlexContainer mr={12} ml={6} mt={18} mb={38}>
                <StyledSearchbar placeholder="Search for conversations" onChange={(e) => setQuery(e.target.value)} value={query} />
                <StyledBasicIconButton iconColor="secondary" iconName={IconName.ChatPlus} onClick={handleCreateConversation} />
            </FlexContainer>

            <FlexContainer flexDirection="column">
                {conversations
                    .filter((c) => filterConversatonByUsername(c, query, user?.id))
                    .map((c) => (
                        <ConversationRow key={c.id} onClick={goToConversation} conversation={c} />
                    ))}
            </FlexContainer>
        </>
    );
}

function filterConversatonByUsername(c: Conversation.AsObject, q: string, userIdToExclude?: string): boolean {
    for (const participant of c.participantsMap) {
        if (participant[0] !== userIdToExclude) {
            if (participant[1].username.includes(q)) return true;
        }
    }

    return false;
}
