import { Margins } from 'common/types';
import FlexContainer from 'components/FlexContainer';
import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 15px 11px 15px;
`;
const Main = styled.div`
    width: 100%;
    height: 114px;
    background-color: ${({ theme }) => (theme.light ? theme['smContrast-1'] + '8A' : theme['smContrast'])};
    border-radius: 16px;
    box-shadow: ${({ theme }) => theme.light && '0px 0px 8px rgba(23, 25, 67, 0.11)'};
`;

const FakeComponent = styled.div<{ width?: number; height: number; radius: number; fluid?: boolean } & Margins>`
    ${({ width, height, mt, fluid, radius }) => css`
        background-color: ${({ theme }) => (theme.light ? theme['smContrast-1'] : theme['smContrast+1'])};
        width: ${fluid ? '100%' : width ? width + 'px' : 0};
        height: ${height ?? 0}px;
        margin-top: ${mt ?? 0}px;
        border-radius: ${radius ?? 0}px;
    `}
`;
export default function Placeholder() {
    return (
        <Main>
            <Container>
                <FakeComponent width={115} height={17} radius={100} />
                <FakeComponent fluid height={31} radius={7} mt={9} />
                <FlexContainer fluid justifyContent="space-between" mt={14}>
                    <FakeComponent width={54} height={17} radius={100} />
                    <FakeComponent width={54} height={17} radius={100} />
                </FlexContainer>
            </Container>
        </Main>
    );
}
