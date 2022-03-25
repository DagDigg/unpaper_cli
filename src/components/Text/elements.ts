import styled, { css } from 'styled-components';
import { scales, weights } from 'uikit';
import { TextProps } from './types';

export const Base = styled.div<TextProps>`
    font-family: 'Plus Jakarta Sans';
    line-height: 100%;
    ${({ scale }) => scale && scales[scale]};

    ${({ color, theme, alpha }) =>
        color &&
        css`
            color: ${theme[color] + (alpha ?? '')};
        `}

    ${({ lightColor, darkColor, theme, alpha }) =>
        lightColor &&
        darkColor &&
        css`
            color: ${theme.light ? theme[lightColor] + alpha : theme[darkColor] + alpha};
        `}

    ${({ customColor }) =>
        customColor &&
        css`
            color: ${customColor};
        `}

    ${({ weight }) =>
        weight &&
        css`
            font-weight: ${weights[weight]};
        `}

    text-align: ${({ align }) => align};

    margin-left: ${({ ml }) => ml && ml + 'px'};
    margin-top: ${({ mt }) => mt && mt + 'px'};
    margin-bottom: ${({ mb }) => mb && mb + 'px'};
    margin-right: ${({ mr }) => mr && mr + 'px'};
    line-height: ${({ lh }) => lh && lh + 'px'};

    ${({ responsive, theme }) =>
        responsive &&
        responsive.maxWidth === 768 &&
        css`
            @media (max-width: 768px) {
                ${responsive.scale && scales[responsive.scale]};

                ${responsive.color &&
                css`
                    color: ${theme[responsive.color]};
                `}

                ${responsive.weight &&
                css`
                    font-weight: ${weights[responsive.weight]};
                `}

                text-align: ${responsive.align ?? 'left'};

                margin-left: ${responsive.ml && responsive.ml + 'px'};
                margin-top: ${responsive.mt && responsive.mt + 'px'};
                margin-bottom: ${responsive.mb && responsive.mb + 'px'};
                margin-right: ${responsive.mr && responsive.mr + 'px'};
                line-height: ${responsive.lh && responsive.lh + 'px'};
            }
        `}
`;
