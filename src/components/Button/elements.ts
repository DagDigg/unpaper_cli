import { Margins } from 'common/types';
import { Base } from 'components/Text/elements';
import styled, { css } from 'styled-components';
import { scales } from 'uikit';

type Props = {
    size: 'big' | 'medium' | 'small';
    fluid?: boolean;
    type: 'primary' | 'secondary';
    disabled?: boolean;
    className?: string;
    squared?: boolean;
    loading?: boolean;
    bgColor?: string;
    bgHoverColor?: string;
    txtColor?: string;
} & Margins;
export const Wrapper = styled.div<Props>`
    border-radius: ${({ squared }) => (squared ? '0.9rem' : '100px')};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ mt }) => mt && mt + 'px'};
    margin-right: ${({ mr }) => mr && mr + 'px'};
    margin-bottom: ${({ mb }) => mb && mb + 'px'};
    margin-left: ${({ ml }) => ml && ml + 'px'};
    width: ${({ fluid }) => fluid && '100%'};
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    transition: background 0.2s ease-in-out;
    & > div {
        color: ${({ txtColor }) => txtColor ?? 'white'};
    }
    text-align: center;
    position: relative;

    background: ${({ theme, type, bgColor }) => bgColor ?? getFallbackBackground(theme, type)};
    background: ${({ theme, type, bgColor }) => bgColor ?? getBackgroundColor(theme, type)};
    background-size: 200% 200%;

    ${({ disabled, theme, bgHoverColor }) =>
        !disabled &&
        css`
            &:hover {
                background-color: ${bgHoverColor ?? theme['primary-1']};
            }
            &:active {
                transform: translateY(1px);
            }
        `}
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.5;
        `}

    ${({ size }) => {
        if (size === 'big')
            return css`
                min-height: 46px;
                min-width: 144px;
                ${scales.subtitle}
                padding: 22px 18px;
                ${Base} {
                    font-weight: 600;
                }
            `;

        if (size === 'medium')
            return css`
                height: 40px;
                min-width: 112px;
                padding: 22px 18px;
                ${scales.subtitle}
            `;

        if (size === 'small')
            return css`
                height: 28px;
                min-width: 80px;
                padding: 18px 15px;
                ${scales.small}
            `;
    }};
`;

function getBackgroundColor(theme: any, type: 'primary' | 'secondary') {
    switch (type) {
        case 'primary':
            return theme.primary;
        case 'secondary':
            return `linear-gradient(180deg, rgba(60,166,255,1) 0%, rgba(4,134,244,1) 100%)`;
        default:
            return theme.primary;
    }
}

function getFallbackBackground(theme: any, type: 'primary' | 'secondary') {
    switch (type) {
        case 'primary':
            return theme.primary;
        case 'secondary':
            return theme.secondary;
        default:
            return theme.primary;
    }
}

export const IconWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    & > svg {
        margin-left: auto;
        margin-right: 4px;
    }
`;
