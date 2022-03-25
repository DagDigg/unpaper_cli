import { ZIndexes } from 'common/zIndexes';
import styled, { css, FlattenInterpolation, keyframes, ThemeProps } from 'styled-components';

const rings = (duration: string, delay: string, color?: string, ringSize?: number): FlattenInterpolation<ThemeProps<any>> =>
    css`
        opacity: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 0;
        content: '';
        height: 100%;
        width: 100%;
        border: ${ringSize ? ringSize + 'px' : '2px'} solid ${({ theme }) => color ?? theme.primary};
        border-radius: 100%;
        animation-name: ${ripple};
        animation-duration: ${duration};
        animation-delay: ${delay};
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(0.65, 0, 0.34, 1);
    `;

const ripple = keyframes`
  from {
    opacity: 1;
    transform: scale3d(0.85,0.85,1);
  }
  
  to {
    opacity: 0;
    transform: scale3d(2,2,2);
  }
`;

export const RippleContainer = styled.div<{ isAnimating: boolean; color?: string; ringSize?: number; avatarSize: number }>`
    position: relative;
    display: flex;
    ${({ avatarSize }) => css`
        width: ${avatarSize}px;
        height: ${avatarSize}px;
    `}
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: ${ZIndexes.Wallpapers};
    ${({ isAnimating, color, ringSize }) =>
        isAnimating &&
        css`
            &::after {
                ${rings('2s', '0s', color, ringSize)};
            }

            &::before {
                ${rings('2s', '0.3s', color, ringSize)};
            }
        `}
`;
