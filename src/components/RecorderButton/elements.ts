import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import styled, { keyframes } from 'styled-components';

export const Circle = styled(FlexContainer)<{ size?: number }>`
    border-radius: 50%;
    background-color: ${({ theme }) => theme.red};
    width: ${({ size }) => (size ? size + 2 + 'px' : '48px')};
    height: ${({ size }) => (size ? size + 2 + 'px' : '48px')};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme['red-1']};
    }
`;

export const RecorderButtonContainer = styled.div<{ size: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ size }) => size + 'px'};
    height: ${({ size }) => size + 'px'};
`;

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const RecordingIcon = styled(Icon).attrs({ name: IconName.Dot, color: 'white', size: IconSize.XS })`
    animation: ${blink} 1500ms infinite;
`;

export const RecorderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
