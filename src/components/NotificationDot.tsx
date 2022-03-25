import React from 'react';
import styled from 'styled-components';

const Dot = styled.div`
    background-color: ${({ theme }) => theme.red};
    border-radius: 50%;
    width: 14px;
    height: 14px;
    position: absolute;
`;

type Props = {
    className?: string;
};
export default function NotificationDot(props: Props) {
    return <Dot className={props.className} />;
}
