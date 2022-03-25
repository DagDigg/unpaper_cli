import styled, { keyframes } from 'styled-components';

const shrinkAnimIn = keyframes`
  from {
      transform: scale(1);
  }
  30% {
    transform: scale(0.2);
  }
  60% {
    transform: scale(0.5);
  }
  to {
    transform: scale(0.4);
  }
`;
const shrinkAnimOut = keyframes`
  from {
      transform: scale(0.4);
  }
  30% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
`;

export const CircleFront = styled.div<{ shouldShrink?: boolean }>`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ theme, shouldShrink }) =>
        shouldShrink ? theme['smContrast+1'] : theme.light ? theme['smContrast-1'] : theme['smContrast+1']};
    animation: ${({ shouldShrink }) => (shouldShrink ? shrinkAnimIn : shrinkAnimOut)} 0.35s forwards;
    border: ${({ theme, shouldShrink }) => (shouldShrink ? 'none' : '1px solid ' + theme['mdContrast+1'] + '80')};
`;

export const CircleBack = styled.div<{ visible: boolean }>`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ theme, visible }) => (visible ? theme.primary : theme.primary + '0')};
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 6px;
    cursor: pointer;
`;
