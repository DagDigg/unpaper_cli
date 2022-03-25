import React from 'react';
import { StyledDiv, StyledSpan } from './elements';

type Props = {
    onClick: () => void;
};
export default function StripeConnectButton(props: Props) {
    return (
        <StyledDiv onClick={props.onClick}>
            <StyledSpan>Connect with</StyledSpan>
        </StyledDiv>
    );
}
