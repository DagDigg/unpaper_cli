import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
    PaymentMethod,
    StripeCardElementChangeEvent,
    StripeCardElementOptions,
    StripeElementChangeEvent,
    StripeError,
} from '@stripe/stripe-js';
import {
    Container,
    Form,
    FormCard,
    FormGroup,
    FormRow,
    Result,
    ResultMessage,
    ResultTitle,
    StyledButton,
    StyledErrorMessage,
    StyledLine,
    StyledResetButton,
} from 'common/cardFormStyles';
import FormField from 'components/FormField';
import Modal from 'components/Modal';
import * as Text from 'components/Text';
import * as paymentActions from 'modules/payment/actions';
import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

const StyledFormGroup = styled(FormGroup)`
    padding: 0;
    margin: 0;
`;
const StyledForm = styled(Form)`
    margin: 0;
    padding: 24px 8px;
`;

type Props = {
    isOpen: boolean;
    onCancel: () => void;
};
export default function ModalCreateCard(props: Props) {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const [error, setError] = useState<StripeElementChangeEvent['error'] | StripeError>();
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (error) {
            elements.getElement('card')!.focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }

        dispatch(
            paymentActions.replaceCard.request({
                cardDetails: {
                    firstName,
                    lastName,
                    stripe,
                    card: elements.getElement(CardElement),
                },
            }),
        );
        // setProcessing(false);

        // if (payload.error) {
        //     setError(payload.error);
        // } else {
        //     setPaymentMethod(payload.paymentMethod);
        // }
    };

    const reset = () => {
        setError(undefined);
        setProcessing(false);
        setPaymentMethod(undefined);
        setFirstName('');
        setLastName('');
    };

    return paymentMethod ? (
        <Result>
            <ResultTitle>Payment successful</ResultTitle>
            <ResultMessage>
                Thanks for trying Stripe Elements. No money was charged, but we generated a PaymentMethod: {paymentMethod.id}
            </ResultMessage>
            <ResetButton onClick={reset} />
        </Result>
    ) : (
        <Modal isOpen={props.isOpen} onCancel={props.onCancel} title="Add card">
            <Container>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledFormGroup>
                        <FormField
                            label="Cardholder Name"
                            id="name"
                            type="outlined"
                            placeholder="Jane"
                            required
                            autoComplete="name"
                            value={firstName}
                            onChange={(value: string) => setFirstName(value)}
                        />
                        <FormField
                            mt={24}
                            label="Cardholder Last name"
                            id="lastName"
                            type="outlined"
                            placeholder="Doe"
                            required
                            autoComplete="email"
                            value={lastName}
                            onChange={(value: string) => setLastName(value)}
                        />
                        <Text.Regular mt={24}>Card</Text.Regular>
                        <FormCard>
                            <CardField
                                onChange={(e: StripeCardElementChangeEvent) => {
                                    setError(e.error);
                                    setCardComplete(e.complete);
                                }}
                            />
                        </FormCard>
                        <ErrorMessage label={error?.message} />

                        <StyledLine />

                        <SubmitButton processing={processing} error={error} disabled={!stripe}>
                            Add Card
                        </SubmitButton>
                    </StyledFormGroup>
                </StyledForm>
            </Container>
        </Modal>
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

const SubmitButton = ({ processing, error, children, disabled }: any) => (
    <StyledButton hasError={!!error} type="submit" disabled={processing || disabled}>
        {processing ? 'Processing...' : children}
    </StyledButton>
);

const ErrorMessage = ({ label }: { label?: string }) => (
    <StyledErrorMessage isVisible={!!label}>
        <Text.Small>{label}</Text.Small>
    </StyledErrorMessage>
);

const ResetButton = ({ onClick }: { onClick: any }) => (
    <StyledResetButton onClick={onClick}>
        <svg width="32px" height="32px" viewBox="0 0 32 32">
            <path
                fill="#FFF"
                d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
            />
        </svg>
    </StyledResetButton>
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
