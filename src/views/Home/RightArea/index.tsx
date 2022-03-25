import React from 'react';
import { FixedContainer, MainContainer } from './elements';
import WhoToFollow from './WhoToFollow';

export default function RightArea() {
    return (
        <FixedContainer>
            <MainContainer>
                <WhoToFollow />
            </MainContainer>
        </FixedContainer>
    );
}
