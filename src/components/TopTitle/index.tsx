import { MAX_WIDTH_SHOULD_HIDE_LEFT } from 'common/constants';
import { isPWA } from 'common/isPWA';
import { ZIndexes } from 'common/zIndexes';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import * as Text from 'components/Text';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const TopColor = styled.div`
    width: 100%;
    height: env(safe-area-inset-top);
    background-color: ${({ theme }) => (theme.light ? theme.white : theme['smContrast-1'])};
    position: sticky;
    top: 0;
    z-index: ${ZIndexes.Foregrounds};
`;
const Container = styled(FlexContainer)`
    padding: ${isPWA() ? '3px' : '17px'} 17px 17px 17px;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => (theme.light ? theme.white : theme['smContrast-1'])};
    border-bottom: 1px solid ${({ theme }) => theme.smContrast};
    width: 100%;
    position: sticky;
    top: env(safe-area-inset-top);
    z-index: ${ZIndexes.Foregrounds};
    & > div {
        display: flex;
        flex: 1 0 33%;
    }
    & > div:nth-child(1) {
        justify-content: flex-start;
    }
    & > div:nth-child(2) {
        justify-content: center;
    }
    & > div:nth-child(3) {
        justify-content: flex-end;
    }
`;

const IconBackContainer = styled.div`
    margin: -17px;
    padding: 17px;
    cursor: pointer;
`;

const ChatBubblesContainer = styled.div`
    display: none;
    cursor: pointer;
    height: 100%;
    width: auto;
    @media screen and (max-width: ${MAX_WIDTH_SHOULD_HIDE_LEFT}px) {
        display: flex;
    }
`;

export const StyledTopTitle = styled(Text.Regular).attrs({ weight: 'bold', color: 'hiContrast' })<{ visible: boolean }>`
    transition: opacity 0.1s cubic-bezier(0.27, 1.07, 0.83, 0.67);
    opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

type Props = {
    label: string;
    textAlignment?: 'center' | 'flex-start';
    goBackEnabled?: boolean;
    scrollEnabled?: boolean;
};
export default function TopTitle(props: Props) {
    const [shouldShowTopTitle, setShouldShowTopTitle] = useState(false);
    const [scrollTop, setScrollTop] = useState(0);
    const { label, textAlignment = 'center' } = props;
    const history = useHistory();

    useEffect(() => {
        const onScroll = (e: any) => {
            setScrollTop(e.target.documentElement.scrollTop);
            if (e.target.documentElement.scrollTop > 51) {
                setShouldShowTopTitle(true);
            } else {
                setShouldShowTopTitle(false);
            }
        };
        if (props.scrollEnabled) {
            window.addEventListener('scroll', onScroll);
        }

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollTop]);

    return (
        <>
            <TopColor />
            <Container justifyContent={textAlignment}>
                <div>
                    {props.goBackEnabled && (
                        <IconBackContainer onClick={() => history.goBack()}>
                            <Icon name={IconName.ChevronLeft} />
                        </IconBackContainer>
                    )}
                </div>
                <div>
                    <StyledTopTitle visible={shouldShowTopTitle || !props.scrollEnabled}>{label}</StyledTopTitle>
                </div>
                <ChatBubblesContainer onClick={() => history.push('/conversations')}>
                    <Icon name={IconName.ChatBubbles} color="hiContrast" />
                </ChatBubblesContainer>
            </Container>
            <div style={{ margin: '24px 12px 18px 12px', display: props.scrollEnabled ? 'visible' : 'none' }}>
                <Text.Title>{label}</Text.Title>
            </div>
        </>
    );
}
