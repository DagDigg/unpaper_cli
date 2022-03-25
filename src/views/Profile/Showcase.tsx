import FlexContainer from 'components/FlexContainer';
import React from 'react';
import styled from 'styled-components';
import * as Text from 'components/Text';

export const Container = styled(FlexContainer).attrs({ justifyContent: 'flex-start' })`
    & > div:not(:first-child) {
        padding-left: 14px;
    }
    & > div:not(:last-child) {
        padding-right: 14px;
        border-right: 1px solid ${({ theme }) => theme.smContrast};
    }
    margin-bottom: 3px;
`;
type Props = {
    items: { title: string; description: string }[];
};
export default function Showcase(props: Props) {
    return (
        <Container>
            {props.items.map((i) => (
                <FlexContainer>
                    <Text.Regular weight="bold">{i.title}</Text.Regular>
                    <Text.Regular color="mdContrast+1" mt={3}>
                        &nbsp;&nbsp;{i.description}
                    </Text.Regular>
                </FlexContainer>
            ))}
        </Container>
    );
}
