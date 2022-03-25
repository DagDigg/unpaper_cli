import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    cursor: pointer;
    border-radius: 28px;
    border: 1px solid ${({ theme }) => theme.smContrast};
    background-color: ${({ theme }) => (theme.light ? theme.white : theme.smContrast + '7a')};
    display: flex;
    padding: 12px;
`;

type Props = {
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const BaseCard: React.FunctionComponent<Props> = (props) => {
    return (
        <Container onClick={props.onClick} className={props.className}>
            {props.children}
        </Container>
    );
};

export default BaseCard;
