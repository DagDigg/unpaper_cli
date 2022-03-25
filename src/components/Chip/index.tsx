import React from 'react';
import { ChipWrapper } from './elements';
import * as Text from 'components/Text';
import { Margins } from 'common/types';

type Props = {
    color?: string;
    label: string;
} & Margins;
export default function Chip(props: Props) {
    const { color, label, ...margins } = props;
    return (
        <ChipWrapper {...margins}>
            <Text.Small color="colorPurpleFg" weight="semiBold">
                {props.label}
            </Text.Small>
        </ChipWrapper>
    );
}
