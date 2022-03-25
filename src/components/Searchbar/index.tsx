import Icon from 'components/Icon';
import { IconName, IconSize } from 'components/Icon/types';
import React from 'react';
import { StyledInput, IconContainer, Container } from './elements';

type Props = {
    className?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    placeholder?: string;
};
export default function Searchbar(props: Props) {
    return (
        <Container className={props.className}>
            <StyledInput placeholder={props.placeholder} value={props.value} onChange={props.onChange}></StyledInput>
            <IconContainer>
                <Icon size={IconSize.SM} name={IconName.Search} color="mdContrast+1" />
            </IconContainer>
        </Container>
    );
}
