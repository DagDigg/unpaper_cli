import Award from 'components/Award';
import FlexContainer from 'components/FlexContainer';
import { Base } from 'components/Text/elements';
import styled, { css, keyframes } from 'styled-components';
import * as Text from 'components/Text';
import { MsgSender } from 'common/types';

const getFadeIn = (direction: 'l-to-r' | 'r-to-l') => keyframes`
    0% {
        transform: translateX(${direction === 'l-to-r' ? '-25%' : '25%'});
        opacity: 0.7;
    }
    100% {
        transform: translateX(0)
        opacity: 1;
    }
`;

function getTextColor(theme: any, sender: MsgSender) {
    if (sender === 'self' || sender === 'adminSelf') {
        return theme.white;
    }

    return theme.light ? theme['mdContrast'] : theme.hiContrast;
}

export function getBubbleColor(theme: any, sender: MsgSender): string {
    return sender === 'self' || sender === 'adminSelf' ? theme.secondary : theme.light ? theme['smContrast'] : theme['smContrast+1'];
}

export const BubbleBall = styled.div<{ sender: MsgSender; customColor?: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

    background-color: ${({ theme, sender, customColor }) => (customColor ? customColor : getBubbleColor(theme, sender))};

    ${({ sender }) =>
        sender === 'admin' || sender === 'adminSelf'
            ? css`
                  bottom: -9px;
                  left: -4px;
              `
            : css`
                  bottom: -9px;
                  right: -17px;
              `}
`;

export const BubbleWrapper = styled.div<{ sender: MsgSender; margin: string; shouldAnimate: boolean }>`
    position: relative;
    display: table;
    padding: 8px 16px;
    border-radius: 25px;
    background-color: ${({ theme, sender }) => getBubbleColor(theme, sender)};
    ${Base} {
        color: ${({ theme, sender }) => getTextColor(theme, sender)};
        line-height: 21px;
        word-break: break-all;
    }
    max-width: 48%;
    margin: ${({ margin }) => margin};

    &,
    ${Base} {
        ${({ sender, shouldAnimate }) =>
            shouldAnimate
                ? css`
                      animation: ${getFadeIn(sender === 'admin' ? 'l-to-r' : 'r-to-l')} 0.25s linear;
                  `
                : css`
                      animation: 'none';
                  `};
    }
`;

export const StyledAward = styled(Award)<{ latestMessage?: boolean }>`
    display: block;
    margin-left: auto;
    cursor: pointer;
    ${({ latestMessage }) =>
        latestMessage &&
        css`
            margin-bottom: 24px;
        `}
`;

export const AnnouncementText = styled(Base).attrs({ scale: 'extraSmall' })`
    color: ${({ theme }) => theme['mdContrast+1'] + 'a8'};
    letter-spacing: 0.05rem;
`;

export const DonationWrapper = styled(FlexContainer)`
    width: 100%;
    border-radius: 8px;
    background: radial-gradient(#80fdaa, #91f3bf);
    padding: 18px;
    margin-bottom: 24px;
`;

export const DonationText = styled(Text.Title)`
    letter-spacing: 1px;
    color: #2c5a34;
`;
