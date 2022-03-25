import BasicIconButton from 'components/BasicIconButton';
import { FakeAvatar } from 'components/Composer/elements';
import FlexContainer from 'components/FlexContainer';
import { IconName } from 'components/Icon/types';
import * as Text from 'components/Text';
import React from 'react';
import { WhoToFollowContainer } from './elements';

const UserToFollowRow: React.FC<{ username: string; fullName: string }> = ({ username, fullName }) => (
    <FlexContainer justifyContent="flex-start" mt={22}>
        <FakeAvatar />
        <FlexContainer ml={12} flexDirection="column" alignItems="flex-start">
            <Text.Regular color="lwContrast" weight="bold">
                {fullName}
            </Text.Regular>
            <Text.Regular mt={4} color="lwContrast" alpha="b8">
                {username}
            </Text.Regular>
        </FlexContainer>
        <div style={{ marginLeft: 'auto' }}>
            <BasicIconButton baseColor="secondary" iconColor="white" squared iconName={IconName.Plus} />
        </div>
    </FlexContainer>
);

export default function WhoToFollow() {
    const mockedUsers = [
        { username: '@john_doe', fullName: 'John Doe' },
        { username: '@frank', fullName: 'Frank Matano' },
        { username: '@ironman', fullName: 'Iron Man' },
    ];
    return (
        <WhoToFollowContainer>
            <Text.Regular mb={12} color="smContrast" weight="extraBold">
                Who to follow
            </Text.Regular>

            {mockedUsers.map((u) => (
                <UserToFollowRow key={u.username} username={u.username} fullName={u.fullName} />
            ))}
        </WhoToFollowContainer>
    );
}
