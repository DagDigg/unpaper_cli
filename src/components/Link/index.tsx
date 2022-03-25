import { TextProps } from 'components/Text/types';
import React from 'react';
import { useHistory } from 'react-router';
import { StyledBase } from './elements';

type Props = {
    to: string;
    label: string;
    type?: 'primary' | 'secondary';
    colorOnHover?: boolean;
    isActive?: boolean;
    onClick?: () => void;
} & TextProps;
export default function Link(props: Props) {
    const history = useHistory();
    const { type = 'primary', scale = 'regular', to, label, ...rest } = props;
    const handleClick = () => {
        props.onClick ? props.onClick() : history.push(to);
    };
    return (
        <StyledBase type={type} scale={scale} {...rest} onClick={handleClick}>
            {label}
        </StyledBase>
    );
}
