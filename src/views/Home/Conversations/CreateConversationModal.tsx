import useDebounce from 'common/useDebounce';
import Modal from 'components/Modal';
import Searchbar from 'components/Searchbar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as mainUsersActions from 'modules/main/users/actions';
import * as mainUsersSelectors from 'modules/main/users/selectors';
import * as Text from 'components/Text';
import { UserSuggestion } from 'api/proto/v1/chat_pb';
import { Center, Container, Right } from 'components/ConversationRow/elements';
import { FakeAvatar } from 'components/Composer/elements';
import BasicIconButton from 'components/BasicIconButton';
import { IconName } from 'components/Icon/types';

const StyledSearchbar = styled(Searchbar)`
    margin-top: 18px;
    margin-bottom: 22px;
`;

type Props = {
    isVisible: boolean;
    onClose: () => void;
    onStartConversation: ({ userId, username }: { userId: string; username: string }) => void;
};
export default function CreateConversationModal(props: Props) {
    const [query, setQuery] = useState('');
    const users = useSelector(mainUsersSelectors.selectUserSuggestions);

    const dispatch = useDispatch();

    const handleQueryChange = (q: string) => {
        setQuery(q);
        getUserSuggestions(q);
    };

    const getUserSuggestions = useDebounce((query) => {
        dispatch(mainUsersActions.getUserSuggestions.request({ query }));
    }, 500);

    return (
        <Modal isOpen={props.isVisible} onCancel={props.onClose} title="Start a new conversation">
            <StyledSearchbar placeholder="Search for an user" value={query} onChange={(e) => handleQueryChange(e.target.value)} />
            {users.map((u) => (
                <UserRow u={u} onClick={props.onStartConversation} />
            ))}
            {!users?.length && (
                <div style={{ margin: '44px auto' }}>
                    <Text.Regular color="mdContrast+1" alpha="c2">
                        Start typing to search for users
                    </Text.Regular>
                </div>
            )}
        </Modal>
    );
}

function UserRow({
    u,
    onClick,
}: {
    u: UserSuggestion.AsObject;
    onClick: ({ userId, username }: { userId: string; username: string }) => void;
}) {
    return (
        <Container onClick={() => onClick({ username: u.username, userId: u.id })}>
            <FakeAvatar size={48} />

            <Center>
                <Text.Regular weight="semiBold">John Doe</Text.Regular>
                <Text.Small weight="regular" mt={8}>
                    @{u.username}
                </Text.Small>
            </Center>
            <Right>
                <BasicIconButton iconColor="secondary" baseColor="secondary+1" iconName={IconName.Plus} />
            </Right>
        </Container>
    );
}
