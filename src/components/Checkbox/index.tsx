import React, { useState } from 'react';
import Squircle from './Squircle';
import * as Text from 'components/Text';
import { Container } from './elements';
import { Margins } from 'common/types';

type Props = {
    label: string;
    onClick: (selected: boolean) => void;
    isSelected: boolean;
} & Margins;
export default function Checkbox(props: Props) {
    const { label, onClick, isSelected, ...margins } = props;
    const [localSelected, setLocalSelected] = useState(props.isSelected);

    const handleClick = () => {
        const next = !localSelected;
        props.onClick(next);
        setLocalSelected(next);
    };

    return (
        <Container {...margins} onClick={handleClick}>
            <Squircle isSelected={isSelected} />
            <Text.Small ml={6} color="mdContrast">
                {props.label}
            </Text.Small>
        </Container>
    );
}
