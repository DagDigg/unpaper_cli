import { Margins } from 'common/types';
import React from 'react';
import styled from 'styled-components';
import { fontSizes } from 'uikit';

const StyledLogo = styled.h1<Margins>`
    font-family: Pacifico;
    font-size: ${fontSizes.title};
    background: -webkit-linear-gradient(#7e87d5, #a97ed5);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-right: ${({ mr }) => mr}px;
`;
type Props = {
    className?: string;
} & Margins;
export default function LogoText(props: Props) {
    const { className, ...rest } = props;
    return (
        <StyledLogo {...rest} className={props.className}>
            Circles
        </StyledLogo>
    );
}
