import FlexContainer from 'components/FlexContainer';
import * as Text from 'components/Text';
import React from 'react';
import { CircleBack, CircleFront, Container } from './elements';

type ID = string | number;
type Props = {
    items: {
        id: ID;
        label: string;
        description?: string;
    }[];
    onClick: (id: ID) => void;
    value: ID;
};
export default function RadioGroup(props: Props) {
    return (
        <>
            {props.items.map((i) => (
                <Container onClick={() => props.onClick(i.id)} key={i.id}>
                    <CircleBack visible={props.value === i.id}>
                        <CircleFront shouldShrink={props.value === i.id} />
                    </CircleBack>
                    <FlexContainer flexDirection="column" alignItems="flex-start">
                        <Text.Regular weight="semiBold" ml={8}>
                            {i.label}
                        </Text.Regular>
                        {i.description && (
                            <Text.ExtraSmall ml={8} mt={-6}>
                                {i.description}
                            </Text.ExtraSmall>
                        )}
                    </FlexContainer>
                </Container>
            ))}
        </>
    );
}
