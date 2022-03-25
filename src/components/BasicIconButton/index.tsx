import { lighten } from 'common/colors';
import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from 'uikit';

export const StyledIcon = styled(Icon)``;

const Container = styled.div<Styles>`
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.16s ease;
    ${({ theme, baseColor, customBaseColor, iconColor, customIconColor, squared }) => css`
        background-color: ${baseColor ? theme[baseColor] : customBaseColor};
        border-radius: ${squared ? '12px' : '50%'};

        &:hover {
            background-color: ${lighten(baseColor ? theme[baseColor] : customBaseColor, 20)};
        }

        ${StyledIcon} > path, ${StyledIcon} > rect, ${StyledIcon} > circle {
            fill: ${iconColor ? theme[iconColor] : customIconColor};
        }
    `}
`;

type Styles = {
    baseColor?: keyof typeof colors.light;
    customBaseColor?: string;
    iconColor?: keyof typeof colors.light;
    customIconColor?: string;
    squared?: boolean;
    iconSize?: IconSize;
    className?: string;
};
type Props = {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    iconName?: IconName;
} & Styles;
export default function BasicIconButton(props: Props) {
    const {
        baseColor,
        customBaseColor = '#000',
        iconColor,
        customIconColor = '#fff',
        iconName = IconName.Plus,
        onClick,
        squared,
        className,
    } = props;

    return (
        <Container
            onClick={onClick}
            squared={squared}
            baseColor={baseColor}
            customBaseColor={customBaseColor}
            iconColor={iconColor}
            customIconColor={customIconColor}
            className={className}
        >
            <StyledIcon size={props.iconSize} name={iconName} />
        </Container>
    );
}
