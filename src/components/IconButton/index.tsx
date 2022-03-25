import { lighten } from 'common/colors';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'uikit';

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

const getIconSize = (s?: Size): IconSize => {
    switch (s) {
        case 'sm':
            return IconSize.XXS;
        case 'lg':
            return IconSize.LG;
        case 'md':
        default:
            return IconSize.SM;
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
    return lighten(c, -25) + '7a';
};

const StyledIcon = styled(Icon)``;

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

    &:hover {
        background-color: ${({ theme, color, customColor }) => getContainerHoverColor(theme, color ? theme[color] : customColor)};
        ${StyledIcon} > path, ${StyledIcon} > rect, ${StyledIcon} > circle {
            fill: ${({ theme, color, customColor }) => (customColor ? customColor : color ? theme[color] : 'black')};
        }
    }

    ${({ theme, color, customColor, bgOnlyOnHover }) =>
        !bgOnlyOnHover &&
        css`
            background-color: ${getContainerColor(theme, color ? theme[color] : customColor)};
        `}
`;

type Props = {
    name: IconName;
    size?: Size;
    iconRestColor?: keyof typeof colors.light;
    color?: keyof typeof colors.light;
    customColor?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    bgOnlyOnHover?: boolean;
    className?: string;
};
export default function IconButton(props: Props) {
    return (
        <Container
            onClick={props.onClick}
            size={props.size}
            color={props.color}
            customColor={props.customColor}
            bgOnlyOnHover={props.bgOnlyOnHover}
            className={props.className}
        >
            <StyledIcon
                color={props.iconRestColor ?? 'mdContrast+1'}
                customColor={props.customColor}
                name={props.name}
                size={getIconSize(props.size)}
            />
        </Container>
    );
}
