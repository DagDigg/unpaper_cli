import { Margins } from 'common/types';
import styled, { css, keyframes } from 'styled-components';

const wobbleAnim = keyframes`
  from {
    transform: scale(1) translate(0px, 0px);
  }
  30% {
    transform: scale(1.3) translate(-3px, -3px);
  }
  60% {
    transform: scale(0.8) translate(2px, 2px);
  }
  to {
    transform: scale(1) translate(0px, 0px);
  }
`;

export const StyledPath = styled.path<{ shouldAnimate: boolean; isSelected: boolean }>`
    ${({ shouldAnimate }) =>
        shouldAnimate &&
        css`
            animation: ${wobbleAnim} 0.3s linear;
        `}

    fill: ${({ isSelected, theme }) => (isSelected ? theme.secondary : theme.smContrast)};
`;

export const CheckMark = styled.path<{ visible: boolean }>`
    transition-delay: 0.3s;
    transition: all 0.1s linear;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    fill: ${({ theme }) => theme.white};
`;

export const StyledSvg = styled.svg`
    flex-shrink: 0;
`;

export const Container = styled.div<Margins>`
    cursor: pointer;
    display: flex;
    width: 100%;
    max-width: 350px;
    margin-bottom: 8px;
    margin-top: ${({ mt }) => mt && mt + 'px'};
    margin-right: ${({ mr }) => mr && mr + 'px'};
    margin-bottom: ${({ mb }) => mb && mb + 'px'};
    margin-left: ${({ ml }) => ml && ml + 'px'};
`;
