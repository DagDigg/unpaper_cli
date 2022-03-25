import { IconWrapper, Wrapper } from './elements';
import React from 'react';
import * as Text from 'components/Text';
import { Margins } from 'common/types';
import Spinner from '../Spinner';

export type Props = {
    label: string;
    onClick: React.MouseEventHandler<HTMLDivElement>;
    size: 'big' | 'medium' | 'small';
    type?: 'primary' | 'secondary';
    loading?: boolean;
    fluid?: boolean;
    icon?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    squared?: boolean;
    bgColor?: string;
    bgHoverColor?: string;
    txtColor?: string;
} & Margins;
export default function Button(props: Props) {
    const { type = 'primary' } = props;
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (props.disabled) return;
        props.onClick(e);
    };

    return (
        <Wrapper
            className={props.className}
            onClick={handleClick}
            size={props.size}
            mt={props.mt}
            mb={props.mb}
            ml={props.ml}
            mr={props.mr}
            fluid={props.fluid}
            type={type}
            disabled={props.disabled || props.loading}
            squared={props.squared}
            loading={props.loading}
            bgColor={props.bgColor}
            bgHoverColor={props.bgHoverColor}
            txtColor={props.txtColor}
        >
            {props.loading ? (
                <Spinner />
            ) : (
                <>
                    {props.icon && <IconWrapper>{props.icon}</IconWrapper>}
                    <Text.Regular weight="bold">{props.label}</Text.Regular>
                    {props.icon && <div style={{ flexGrow: 1, flexBasis: 0 }} />}
                </>
            )}
        </Wrapper>
    );
}
