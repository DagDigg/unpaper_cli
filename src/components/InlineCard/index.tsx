import FlexContainer from 'components/FlexContainer';
import Icon from 'components/Icon';
import { IconWrapper } from 'components/Icon/IconWrapper';
import { IconName } from 'components/Icon/types';
import * as Text from 'components/Text';
import * as paymentSelectors from 'modules/payment/selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { Container, StyledLink } from './elements';

type Props = {
    className?: string;
    onChangeCardClick: () => void;
};
export default function InlineCard(props: Props) {
    const customer = useSelector(paymentSelectors.selectCustomer);

    return (
        <Container className={props.className}>
            <FlexContainer alignItems="center" justifyContent="space-between" fluid>
                <IconWrapper>
                    <Icon name={IconName.Card} />
                </IconWrapper>

                <FlexContainer flexDirection="column" alignItems="flex-start" ml={12}>
                    <Text.Regular weight="bold">Card</Text.Regular>
                    <Text.Small>Ends with **** {customer?.defaultPaymentMethod?.lastFour ?? ''}</Text.Small>
                </FlexContainer>
                <StyledLink type="secondary" to="" label="Change" onClick={props.onChangeCardClick} />
            </FlexContainer>
        </Container>
    );
}
