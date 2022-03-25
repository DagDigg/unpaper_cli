import React from 'react';
import CardSVG from './CardSVG';
import * as Text from 'components/Text';
import FlexContainer from 'components/FlexContainer';

export default function CreditCard(props: any) {
    return (
        <CardSVG>
            <FlexContainer fullHeight flexDirection="column" justifyContent="space-between">
                <FlexContainer fluid justifyContent="flex-end">
                    <Text.RegularBig color="lwContrast">John Doe</Text.RegularBig>
                </FlexContainer>
                <FlexContainer justifyContent="center">
                    <Text.Regular color="lwContrast">**** **** **** 4242</Text.Regular>
                </FlexContainer>
                <FlexContainer mb={-8} justifyContent="center">
                    <Text.Small color="smContrast">03/2025</Text.Small>
                </FlexContainer>
            </FlexContainer>
        </CardSVG>
    );
}
