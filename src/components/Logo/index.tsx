import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div<{ mt?: number; ml?: number; isMobile?: boolean }>`
    font-family: Pacifico;
    font-size: ${({ isMobile }) => (isMobile ? '24px' : '36px')};
    color: ${({ theme }) => theme.primary};
    margin-top: ${({ mt }) => mt && mt + 'px'};
    margin-left: ${({ ml }) => ml && ml + 'px'};
`;

type Props = {
    className?: string;
    isMobile?: boolean;
    mt?: number;
    ml?: number;
};
export default function Logo(props: Props) {
    return (
        <StyledLogo className={props.className} mt={props.mt} ml={props.ml} isMobile={props.isMobile}>
            Storytell
        </StyledLogo>
    );
}
