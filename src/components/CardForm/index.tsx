import { CardElement } from '@stripe/react-stripe-js';
import { Stripe, StripeCardElementChangeEvent, StripeCardElementOptions, StripeElements } from '@stripe/stripe-js';
import { Container, Form, FormCard, FormGroup, FormRow, StyledErrorMessage } from 'common/cardFormStyles';
import FormField from 'components/FormField';
import * as Text from 'components/Text';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { CredentialsContainer } from './elements';
import './styles.css';
import { CardValues } from './types';

type Props = {
    cardValues: CardValues;
    setCardValues: (cardValues: CardValues) => void;
    stripe: Stripe | null;
    elements: StripeElements | null;
    formErrors: { firstName: string; lastName: string };
};
export default function CardForm(props: Props) {
    const { cardValues, setCardValues } = props;

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (cardValues.cardComplete) {
            setCardValues({ ...cardValues, processing: true });
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <CredentialsContainer>
                        <FormField
                            label="Cardholder Name"
                            id="name"
                            type="outlined"
                            placeholder="Jane"
                            required
                            autoComplete="name"
                            value={cardValues.firstName}
                            onChange={(value: string) => setCardValues({ ...cardValues, firstName: value })}
                            error={props.formErrors.firstName}
                        />
                        <FormField
                            label="Cardholder Last name"
                            id="lastName"
                            type="outlined"
                            placeholder="Doe"
                            required
                            autoComplete="email"
                            value={cardValues.lastName}
                            onChange={(value: string) => setCardValues({ ...cardValues, lastName: value })}
                            error={props.formErrors.lastName}
                        />
                    </CredentialsContainer>
                    <Text.Small color="mdContrast+1" mt={16}>
                        Card Number
                    </Text.Small>
                    <FormCard>
                        <CardField
                            onChange={(e: StripeCardElementChangeEvent) => {
                                setCardValues({ ...cardValues, error: e.error, cardComplete: e.complete });
                            }}
                        />
                    </FormCard>
                    <ErrorMessage label={cardValues.error?.message} />
                </FormGroup>
            </Form>
        </Container>
    );
}

type CardFieldProps = {
    onChange: ((event: StripeCardElementChangeEvent) => any) | undefined;
};
const CardField = ({ onChange }: CardFieldProps) => {
    const theme = useContext(ThemeContext);
    return (
        <FormRow>
            <CardElement options={getCardOptions(theme)} onChange={onChange} />
        </FormRow>
    );
};

const ErrorMessage = ({ label }: { label?: string }) => (
    <StyledErrorMessage isVisible={!!label}>
        <Text.Small color="red">{label}</Text.Small>
    </StyledErrorMessage>
);

const getCardOptions = (theme: any): StripeCardElementOptions => ({
    iconStyle: 'solid',
    hidePostalCode: true,
    style: {
        base: {
            iconColor: theme.hiContrast,
            color: theme.mdContrast,
            fontWeight: 500,
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': { color: theme.mdContrast },
            '::placeholder': { color: theme.mdContrast + '50' },
        },
        invalid: {
            iconColor: theme['red'],
            color: theme['red'],
        },
    },
});
