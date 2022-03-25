import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconName } from 'components/Icon/types';
import * as Text from 'components/Text';
import React, { useRef } from 'react';
import { Center, Left, Right, StyledInput } from './elements';

type Props = {
    amt: number;
    onChange: (amt: number) => void;
    mb?: number;
    mt?: number;
    className?: string;
};
export default function PriceInput(props: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    console.log(props.amt);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        const fmtVal = fmtValue(e.target.value);
        if (fmtVal === '') {
            props.onChange(Number(fmtVal));
            return;
        }

        const val = parseInt(fmtVal);
        if (isNaN(val)) {
            return;
        }

        if (val < 0) {
            props.onChange(1);
        }

        if (val > 999) {
            return;
        }

        props.onChange(val);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> | undefined = (e) => {
        if (['.', '-', '+', 'e'].includes(e.key)) {
            e.preventDefault();
        }
    };

    const handleBlur = () => {
        if (props.amt <= 0) {
            props.onChange(1);
        }
    };

    const handleInputClick = () => {
        inputRef.current?.select();
    };

    return (
        <FlexContainer mt={props.mt} mb={props.mb} className={props.className}>
            <Left>
                <Icon name={IconName.Minus} color="mdContrast" />
            </Left>
            <Center onClick={handleInputClick} amt={props.amt}>
                <Text.Small mt={4} mr={2}>
                    $
                </Text.Small>
                <StyledInput
                    value={props.amt === 0 ? '' : props.amt}
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ref={inputRef}
                />
            </Center>
            <Right>
                <Icon name={IconName.Plus} color="mdContrast" />
            </Right>
        </FlexContainer>
    );
}

function fmtValue(v: string) {
    return v.replace(/[-+e]/gi, '');
}
