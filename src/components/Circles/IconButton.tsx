import { lighten } from 'common/colors';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'uikit';
import Icon from './Icon';

type Size = 'sm' | 'md' | 'lg';

const getElementSize = (s?: Size) => {
    switch (s) {
        case 'sm':
            return '24px';
        case 'lg':
            return '48px';
        case 'md':
        default:
            return '38px';
    }
};

const getContainerColor = (theme: any, c: string) => {
    if (theme.light) {
        return lighten(c, 43);
    }
    return lighten(c, -40) + '7a';
};
const getContainerHoverColor = (theme: any, c: string) => {
    if (theme.light) {
        return lighten(c, 40);
    }
    return lighten(c, -30) + '7a';
};

const Container = styled.div<{ size?: Size; color?: keyof typeof colors.light; customColor?: string; bgOnlyOnHover?: boolean }>`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ${({ size }) => css`
        width: ${getElementSize(size)};
        height: ${getElementSize(size)};
    `}
    ${({ theme, color, customColor, bgOnlyOnHover }) =>
        bgOnlyOnHover
            ? css`
                  &:hover {
                      background: #daf1ffcc;
                      ${({ theme }) =>
                          theme.light
                              ? css`
                                    background: -webkit-radial-gradient(bottom left, #e0f3ffcc, #f2e8ffcc);
                                    background: -moz-radial-gradient(bottom left, #e0f3ffcc, #f2e8ffcc);
                                    background: radial-gradient(to top right, #e0f3ffcc, #f2e8ffcc);
                                `
                              : css`
                                    background: #c2e7fee6;
                                    background: -webkit-radial-gradient(bottom left, #c2e7fee6, #cfb6efcc);
                                    background: -moz-radial-gradient(bottom left, #c2e7fee6, #cfb6efcc);
                                    background: radial-gradient(to top right, #c2e7fee6, #cfb6efcc);
                                `}
              `
            : css`
                  background-color: ${getContainerColor(theme, color ? theme[color] : customColor)};
                  &:hover {
                      background-color: ${getContainerHoverColor(theme, color ? theme[color] : customColor)};
                  }
              `}
`;

type Props = {
    size?: Size;
    color?: keyof typeof colors.light;
    customColor?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    iconRestColor?: keyof typeof colors.light;
    bgOnlyOnHover?: boolean;
};
export default function IconButton(props: Props) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Container
            onClick={props.onClick}
            size={props.size}
            color={props.color}
            customColor={props.customColor}
            bgOnlyOnHover={props.bgOnlyOnHover}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon color={props.iconRestColor ?? 'mdContrast+1'} colored={isHovered} customColor={props.customColor} />
        </Container>
    );
}
