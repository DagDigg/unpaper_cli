import BaseCard from 'components/BaseCard';
import FlexContainer from 'components/FlexContainer';
import Line from 'components/Line';
import * as Text from 'components/Text';
import styled, { css } from 'styled-components';

const getCardStyles = (theme: any) => {
    return {
        borders: theme.light ? theme['smContrast'] : theme['smContrast+1'],
        shadowRest: theme.light ? '0px 0px 8px rgba(214, 236, 255, 0.4)' : 'none',
        shadowHover: theme.light ? '0px 0px 12px rgba(214, 236, 255, 0.8)' : 'none',
        borderHover: theme.secondary + 'a8',
    };
};

export const Content = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-grow: 1;
`;

export const AudioContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: 12px 24px 0 0;
    padding: 12px 0 12px 0;
    border-bottom: 1px solid ${({ theme }) => getCardStyles(theme).borders};
`;
export const Circle = styled.div`
    width: 44px;
    height: 44px;
    background-color: wheat;
    border-radius: 50%;
    display: inline-block;
    align-self: flex-start;
    flex-shrink: 0;
`;

export const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 100%;
    align-items: flex-start;
    margin-top: 3px;
    word-break: break-word;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 100%;
    margin-left: -9px;
    margin-top: 12px;
    & > div {
        margin-right: 10%;
    }
`;

export const FooterInfo = styled.div`
    display: flex;
    flex: 1 0 100%;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
    flex-wrap: wrap;

    & > :nth-child(2) {
        margin-top: 10px;
    }
`;

export const FooterInfoSection = styled.div`
    justify-content: flex-start;
    display: flex;
    flex: 1 0 100%;
    align-items: center;
`;

export const IconMoreContainer = styled.div`
    position: absolute;
    cursor: pointer;
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 4px;
    right: 4px;
    &:hover {
        & > svg > path {
            fill: ${({ theme }) => theme['mdContrast+1']};
        }
    }
`;

export const StyledLine = styled(Line)`
    background-color: ${({ theme }) => getCardStyles(theme).borders};
`;

export const RightHeader = styled(FlexContainer)`
    align-self: flex-start;
    margin-left: 16px;
`;

export const Subtitle = styled(Text.Regular)`
    margin-top: 16px;
`;

export const PriceBoxWrapper = styled(FlexContainer)`
    min-height: 24px;
    padding: 4px 12px;
    border-radius: 100px;
    background-color: #5e5e6d;
    position: absolute;
    top: -12px;
    left: 28px;
`;

export const StyledBaseCard = styled(BaseCard)<{ isPlaying: boolean }>`
    margin: 12px 8px;
    transition: border 0.2s ease-in-out;
    ${({ isPlaying, theme }) =>
        isPlaying &&
        css`
            border: 1px solid ${theme['primary']};
        `}
`;
