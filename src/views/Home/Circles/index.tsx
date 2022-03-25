import Modal from 'components/Modal';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import * as Text from 'components/Text';
import FlexContainer from 'components/FlexContainer';
import { LogoText, LogoImage } from 'components/Circles';
import Placeholder from './Placeholder';
import avatarYellowSrc from 'assets/avatar_yellow.png';
import avatarPurpleSrc from 'assets/avatar_purple.png';
import Button from 'components/Button';

export default function Circles(props: RouteComponentProps) {
    return (
        <Modal isOpen onCancel={() => {}}>
            <FlexContainer justifyContent="center" flexDirection="column">
                <Text.Subtitle color="mdContrast+1">Introducing</Text.Subtitle>
                <FlexContainer ml={16} mt={4}>
                    <LogoText mr={8} />
                    <LogoImage />
                </FlexContainer>
                <Text.Regular align="center" weight="regular" color="mdContrast+1" mt={14}>
                    Circles enables you to stay in touch with the people you care the most.
                </Text.Regular>

                <FlexContainer fluid alignItems="flex-start" mt={60}>
                    <img alt="avatar_yellow" src={avatarYellowSrc} width={64} height={64} style={{ marginRight: 8 }} />
                    <Placeholder />
                </FlexContainer>

                <FlexContainer fluid alignItems="flex-start" mt={38} mb={60}>
                    <Placeholder />
                    <img alt="avatar_purple" src={avatarPurpleSrc} width={64} height={64} style={{ marginLeft: 8 }} />
                </FlexContainer>

                <Button size="medium" fluid squared label="Got it" type="secondary" onClick={() => {}} />
            </FlexContainer>
        </Modal>
    );
}
