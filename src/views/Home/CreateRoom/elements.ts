import { Visibility } from 'api/proto/v1/chat_pb';
import FlexContainer from 'components/FlexContainer';
import styled, { css } from 'styled-components';
import { scales } from 'uikit';

export const PermissionsContainer = styled.div`
    width: calc(100% + 48px);
    margin: 40px -24px 0 -24px;
    padding: 24px;
    background-color: ${({ theme }) => (theme.light ? theme['smContrast'] : theme['smContrast'])};
`;

export const AnimatedDiv = styled.div<{ shouldExpand: boolean }>`
    transition: height 0.2s linear;
    overflow: hidden;
    height: ${({ shouldExpand }) => (shouldExpand ? '68px' : '0px')};
`;

export const BackgroundAvatar = styled(FlexContainer)<{ from: string; to: string }>`
    width: 96px;
    height: 96px;
    border-radius: 18px;

    background: ${({ from }) => from};
    ${({ from, to }) => css`
        background: linear-gradient(221deg, ${from} 0%, ${to} 100%);
    `}
`;

export const StyledInputRoomName = styled.input`
    border: none;
    background-image: none;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    text-align: center;
    margin-top: 12px;
    & {
        ${scales.subtitle}
    }
    &::placeholder {
        ${scales.subtitle}
        opacity: 0.6;
    }
`;

export const VisibilityContainer = styled(FlexContainer).attrs({ justifyContent: 'flex-start', mt: 40 })<{ visibility: Visibility.Enum }>`
    cursor: pointer;
    padding: 8px 16px;
    transition: all 0.3s ease-in-out;
    margin: 0 -16px;
    &:hover {
        background-color: ${({ theme, visibility }) => (visibility === Visibility.Enum.PRIVATE ? theme.colorAzureBg : theme.colorGreenBg)};
    }
`;

export const LeftVisibilityWrapper = styled(FlexContainer)`
    max-width: 316px;
    & > div:last-child {
        line-height: 15px;
    }
`;

export const ModalVisibilityContainer = styled(FlexContainer).attrs({ justifyContent: 'space-between' })`
    cursor: pointer;
`;

export const GradientsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0px -8px -12px -8px;
    & > * {
        margin: 24px 8px;
        flex: 0 0 26px;
    }
`;
export const GradientPreview = styled.div<{ from: string; to: string; isSelected: boolean }>`
    width: 26px;
    height: 26px;
    cursor: pointer;
    border-radius: 50%;
    ${({ from, to }) => css`
        background: linear-gradient(221deg, ${from} 0%, ${to} 100%);
    `}
    border: 2px solid ${({ theme, isSelected }) => (isSelected ? theme['mdContrast+1'] : theme.lwContrast)};
    transition: border-color 0.25s ease-in-out;
    &:hover {
        border-color: ${({ theme }) => theme['mdContrast+1']};
    }
`;
