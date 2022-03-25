import { ZIndexes } from 'common/zIndexes';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import styled, { css, keyframes } from 'styled-components';
import { weights } from 'uikit';

export const StyledFlexContainer = styled(FlexContainer).attrs({ alignItems: 'flex-start' })`
    position: sticky;
    background-color: ${({ theme }) => theme['lwContrast'] + 'b3'};
    bottom: 0;
    margin-top: auto;
    backdrop-filter: blur(24px);
    padding: 14px 8px env(safe-area-inset-bottom);
`;

export const InputWrapper = styled.div<{ isFocused: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px 0 18px;
    border-radius: 100px;
    border: 1px solid;
    border-color: ${({ theme, isFocused }) => (isFocused ? getFocusBorderColor(theme) : getRestBorderColor(theme))};
    height: 47px;
    flex-grow: 1;
    background-color: ${({ theme }) => (theme.light ? theme['white'] : theme['black'])};

    margin-left: 8px;

    &:hover,
    &:focus {
        border-color: ${({ theme }) => getFocusBorderColor(theme)};
    }
`;

export const Input = styled.input`
    box-shadow: none;
    outline: none;
    caret-color: ${({ theme }) => theme['mdContrast-1']};
    color: ${({ theme }) => theme['mdContrast-1']};
    /* iOS styles removal */
    appearance: none;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: ${weights.medium};
    font-family: 'Plus Jakarta Sans';
    flex: 1;

    ::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme['mdContrast-1'] + '60'};
        font-weight: ${weights.medium};
    }
`;

export const SendIconWrapper = styled.div`
    width: 47px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
`;
export const SendIcon = styled(Icon).attrs({ name: IconName.Send, color: 'mdContrast+1' })`
    transition: all 0.2s ease-in-out;
    margin-left: 2px;
    &:hover {
        transform-origin: center;
        transform: scale(1.1);
    }
`;

export const LeftActionsWrapper = styled.div`
    width: 54px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${({ theme }) => (theme.light ? theme['smContrast'] + '40' : theme['smContrast'])};
    border: 1px solid ${({ theme }) => (theme.light ? theme['mdContrast+1'] + '40' : theme['smContrast+1'])};
    cursor: pointer;
    margin-bottom: 12px;
`;
export const LeftActionsIcon = styled(Icon).attrs(({ theme }) => ({
    name: IconName.TextFilled,
    color: theme.light ? 'grayed-1' : 'mdContrast+1',
}))``;

const wobbleAnimation = keyframes`
    from {
      transform: scale(0.7);
    }
    20%{
      transform: scale(0.8);
    }
    40% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    to {
      transform: scale(1);
    }
`;

export const ActionIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: 64px;
    height: 48px;
    cursor: pointer;
    &:hover {
        & > svg > path {
            fill: ${({ theme }) => theme.mdContrast};
        }
    }
`;

export const ActionsContainer = styled.div<{ shouldShow: boolean }>`
    border-radius: 100px;
    height: 64px;
    background-color: ${({ theme }) => (theme.light ? theme['white'] + 'a8' : theme['smContrast'])};
    border: 1px solid ${({ theme }) => (theme.light ? theme['smContrast-1'] + '40' : theme['smContrast+1'])};
    transform: translate(-50%, -50%);
    z-index: ${ZIndexes.Modals};
    transition: opacity 0.25s ease-in-out;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    ${({ shouldShow }) =>
        shouldShow
            ? css`
                  opacity: 1;
                  display: flex;
              `
            : css`
                  opacity: 0;
                  display: none;
              `};
    & > div > svg {
        transform: scale(0.7);
    }
    & > div > svg:first-child {
        animation: ${wobbleAnimation} 0.25s linear forwards;
    }
    & > div > svg:nth-child(2) {
        animation: ${wobbleAnimation} 0.25s linear 0.15s forwards;
    }
    & > ${ActionIconWrapper}:first-child {
        margin-left: 16px;
    }
    & > ${ActionIconWrapper}:last-child {
        margin-right: 16px;
    }

    transition: width height cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

function getRestBorderColor(theme: any) {
    return theme.light ? theme['smContrast-1'] : theme['smContrast+1'];
}

function getFocusBorderColor(theme: any) {
    return theme.light ? theme['mdContrast+1'] : theme['mdContrast-1'];
}
