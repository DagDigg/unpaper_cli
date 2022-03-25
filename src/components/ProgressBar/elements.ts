import styled, { css } from 'styled-components';
import { BarType } from '.';

const barSpecs: Record<BarType, { width: number; height: number }> = {
    vertical: {
        width: 3,
        height: 64,
    },
    horizontal: {
        width: 38,
        height: 3,
    },
};

const getBarSize = (t: BarType, width?: number, height?: number) => ({
    width: `${width ?? barSpecs[t].width}px`,
    height: `${height ?? barSpecs[t].height}px`,
});

export const BackBar = styled.div<{
    color?: string;
    type: BarType;
    width?: number;
    height?: number;
    borderRadius?: number;
    fluid?: boolean;
}>`
    background-color: ${({ theme, color }) => color ?? (theme.light ? theme['smContrast-1'] : theme['smContrast+1'])};
    position: relative;
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius + 'px' : 0)};
    ${({ type, width, height, fluid }) => css`
        width: ${fluid ? '100%' : getBarSize(type, width, height).width};
        height: ${getBarSize(type, width, height).height};
    `}
`;

export const FrontBar = styled.div<{
    progress: number;
    color?: string;
    type: BarType;
    width?: number;
    height?: number;
    borderRadius?: number;
}>`
    border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius + 'px' : 0)};
    transition: ${({ progress }) => progress !== 0 && 'height 0.2s ease, width 0.2s ease'};
    background-color: ${({ theme, color }) => color ?? theme.secondary};
    ${({ type, progress, width, height }) =>
        type === 'vertical'
            ? css`
                  width: ${getBarSize(type, width, height).width};
                  height: ${progress}%;
              `
            : css`
                  height: ${getBarSize(type, width, height).height};
                  width: ${progress}%;
              `}
`;
