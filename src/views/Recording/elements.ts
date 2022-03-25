import { ZIndexes } from 'common/zIndexes';
import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import styled, { keyframes } from 'styled-components';
import { colors } from 'uikit';

const StyledIcon = styled(Icon)`
    cursor: pointer;
`;
export const RecordIcon = styled(StyledIcon).attrs({ name: IconName.Record, size: IconSize.MX, color: 'red' })`
    &:active {
        & > path {
            fill: ${colors.light['red-1']};
        }
    }
`;
export const PauseIcon = styled(StyledIcon).attrs({ name: IconName.Pause, size: IconSize.SP })``;
export const PlayIcon = styled(StyledIcon).attrs({ name: IconName.Play, size: IconSize.SP })``;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const RecordingIndicator = styled.div`
    position: absolute;
    z-index: ${ZIndexes.Content};
    border-radius: 50%;
    top: 82px;
    right: 8px;
    width: 34px;
    height: 34px;
    background-color: red;
    animation: ${blink} 1500ms infinite;
`;

export const CloseIconWrapper = styled(FlexContainer)`
    padding: 3px 22px;
    border-radius: 36px;
    background-color: ${({ theme }) => theme.mdContrast + '3C'};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.mdContrast + '50'};
    }
    transition: background-color 0.2s ease-in-out;
    position: absolute;
    transform: translateX(-50%);
    top: 84px;
    left: 50%;
`;

export const ActionsContainer = styled(FlexContainer)`
    position: relative;
    height: 100%;
`;

export const SendWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    padding: 14px 28px;
    flex-grow: 0;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme['secondary-1']};
    }
`;
