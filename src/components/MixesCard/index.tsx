import React from 'react';
import styled, { css } from 'styled-components';
import * as Text from 'components/Text';

const Card = styled.div<Style>`
    width: 194px;
    height: 194px;
    border-radius: 12px;
    margin: 12px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-shrink: 0;
    padding: 18px;
    ${({ fallbackBackground, backgroundImage }) => css`
        background-color: ${fallbackBackground};
        background-image: ${backgroundImage};
    `}
`;

type Style = {
    fallbackBackground: string;
    backgroundImage: string;
};

type Props = {
    mixId: string;
    onClick: (mixId: string) => void;
    title: string;
} & Style;
export default function MixesCard(props: Props) {
    return (
        <Card
            onClick={() => props.onClick(props.mixId)}
            fallbackBackground={props.fallbackBackground}
            backgroundImage={props.backgroundImage}
        >
            <Text.Title color="white">{props.title}</Text.Title>
        </Card>
    );
}
