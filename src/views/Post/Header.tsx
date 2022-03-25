import { ExtUserInfo } from 'api/proto/v1/auth_pb';
import Button from 'components/Button';
import ButtonFollow from 'components/ButtonFollow';
import { FakeAvatar } from 'components/Composer/elements';
import FlexContainer from 'components/FlexContainer';
import * as Text from 'components/Text';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeContext } from 'styled-components';
import { ColorScheme, ColorSchemeContext } from './useColorScheme';

const Top = styled.div<{ bg: string }>`
    padding: calc(18px + env(safe-area-inset-top)) 16px 24px;
    background-color: ${({ bg }) => bg};
`;

const MainMessage = styled(Text.Subtitle)<{ customColor: string }>`
    text-align: center;
    margin: 16px 28px 0;
    line-height: 28px;
`;

type Props = {
    colorScheme: ColorScheme;
    postMessage: string;
    onPlayAudio: () => void;
    userInfo: ExtUserInfo.AsObject;
    onFollow: (userId: string) => void;
    onProfileClick: (userId: string) => void;
    isExtUser: boolean;
};

export default function Header(props: Props) {
    const theme = useContext(ThemeContext);
    const colorScheme = useContext(ColorSchemeContext);

    const isAlreadyFollowed = !!props.userInfo.isFollowed;
    return props.userInfo ? (
        <>
            <Helmet>
                <meta name="theme-color" content={props.colorScheme.smContrast}></meta>
            </Helmet>
            <Top bg={props.colorScheme.smContrast}>
                <FlexContainer justifyContent="flex-start" alignItems="flex-start">
                    <FakeAvatar size={44} mr={8} onClick={() => props.onProfileClick(props.userInfo.id)} />
                    <FlexContainer flexDirection="column" alignItems="flex-start">
                        <Text.Regular
                            weight="extraBold"
                            mt={3}
                            customColor={props.colorScheme.hiContrast}
                            onClick={() => props.onProfileClick(props.userInfo.id)}
                        >
                            @{props.userInfo.username}
                        </Text.Regular>
                        <Text.Small mt={2} customColor={props.colorScheme.hiContrast}>
                            #general
                        </Text.Small>
                    </FlexContainer>
                    <div style={{ marginLeft: 'auto' }}>
                        {props.isExtUser && (
                            <ButtonFollow
                                isAlreadyFollowed={isAlreadyFollowed}
                                txtColor={isAlreadyFollowed ? colorScheme.hiContrast : theme.lwContrast}
                                onClick={props.onFollow}
                                userId={props.userInfo.id}
                            />
                        )}
                    </div>
                </FlexContainer>

                <MainMessage customColor={props.colorScheme.hiContrast}>{props.postMessage}</MainMessage>
                <FlexContainer>
                    <Button
                        bgColor={props.colorScheme.hiContrast}
                        txtColor={props.colorScheme.lwstContrast}
                        onClick={props.onPlayAudio}
                        mt={18}
                        size="medium"
                        label="Play audio"
                    />
                </FlexContainer>
            </Top>
        </>
    ) : (
        <> </>
    );
}
