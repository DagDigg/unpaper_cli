import { RoomType } from 'api/proto/v1/chat_pb';
import FlexContainer from 'components/FlexContainer';
import PriceInput from 'components/PriceInput';
import * as Text from 'components/Text';
import styled, { css, keyframes } from 'styled-components';

export const FreeRoomTypeWrapper = styled(FlexContainer)<{ isSelected: boolean; shouldShow: boolean }>`
    transition: min-width 450ms linear, flex 450ms linear, margin 450ms linear, padding 450ms linear;
    min-width: 194px;
    min-height: 94px;
    flex-grow: 1;
    cursor: pointer;
    border-radius: 12px;
    border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme['primary'] : theme['smContrast-1'])};
    overflow: hidden;

    &:hover {
        border: 1px solid ${({ theme }) => theme['primary']};
    }

    ${({ shouldShow }) =>
        !shouldShow &&
        css`
            border: none;
            flex: 0 !important;
            min-width: 0;
            margin: 0 !important;
            opacity: 0;
            padding: 0;
        `}
`;

const topLeft = keyframes`
    from { opacity: 0; top: 50%; left: 50%; }
    1% { opacity: 0.3; top: 26px; left: 64px; }
    to { opacity: 1; top: 26px; left: 71px; }
`;

export const PayToJoinTitle = styled(Text.Subtitle).attrs({ color: 'mdContrast+1' })<{ shouldMove: boolean }>`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    ${({ shouldMove }) =>
        shouldMove &&
        css`
            animation: ${topLeft} 350ms linear forwards;
        `}
`;

export const RoomTypeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 48px -16px -12px -16px;
    & > * {
        margin: 12px 16px;
        flex: 1 1 194px;
    }
`;

export const RoomTypeWrapper = styled.div<{
    isSelected: boolean;
    paymentDisabled?: boolean;
    shouldExpand?: boolean;
}>`
    padding: 44px 16px 16px 16px;
    position: relative;
    transition: all 450ms linear;
    min-width: 194px;
    min-height: 94px;
    max-height: 94px;
    opacity: ${({ paymentDisabled }) => (paymentDisabled ? 0.6 : 1)};
    cursor: ${({ paymentDisabled }) => (paymentDisabled ? 'default' : 'pointer')};
    border-radius: 12px;
    border: 1px solid ${({ theme, isSelected }) => (isSelected ? theme['primary'] : theme['smContrast-1'])};
    overflow: hidden;
    flex-grow: 1;

    &:hover {
        border: 1px solid ${({ theme, paymentDisabled }) => (paymentDisabled ? theme['smContrast-1'] : theme['primary'])};
    }

    ${({ shouldExpand }) =>
        shouldExpand &&
        css`
            max-height: 500px;
        `}
`;

export const StyledPriceInput = styled(PriceInput)`
    justify-content: flex-start !important;
    margin-top: auto;
    & > * {
        background: none;
    }
`;

export const SquaredWrapper = styled(FlexContainer)<{ grow: number }>`
    position: relative;
    border-radius: 12px;
    padding: 52px 16px 24px 16px;
    flex-wrap: wrap !important;
    flex: ${({ grow }) => grow && grow} 1;
    background-color: ${({ theme }) => (theme.light ? theme['smContrast+1'] : theme['smContrast-1'])};
    & > div:first-child {
        position: absolute;
        top: 12px;
        left: 24px;
    }
    height: 138px;
`;

export const IntervalContainer = styled.div<{ roomType: RoomType.Enum }>`
    cursor: pointer;
    padding: 8px 16px;
    transition: all 0.3s ease-in-out;
    margin: 0 -16px;
    width: calc(100% + 32px);
    &:hover {
        background-color: ${({ theme, roomType }) =>
            roomType === RoomType.Enum.SUBSCRIPTION_MONTHLY ? theme.colorOrangeBg : theme.colorGreenBg};
    }
`;

export const WrappersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 28px -8px -16px -8px;

    & > * {
        margin: 12px 8px;
    }
`;

export const ModalRow = styled(FlexContainer).attrs({ justifyContent: 'space-between' })`
    cursor: pointer;
`;
