import { CENTER_CONTENT_WIDTH } from 'common/constants';
import Button from 'components/Button';
import FormField from 'components/FormField';
import * as Text from 'components/Text';
import * as authActions from 'modules/auth/actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
    width: ${CENTER_CONTENT_WIDTH + 'px'};
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20vh 24px;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    margin: -8px;
    & > * {
        margin: 8px;
    }

    & > div:first-child {
        flex: 8 0 257px;
    }
    & > div:last-child {
        min-width: 192px;
        margin-bottom: 22px;
        flex: 4 0 0%;
    }
`;

export default function ForgotPassword(_: RouteComponentProps) {
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    return (
        <Container>
            <Text.Title>Forgot your password?</Text.Title>
            <Text.Regular mb={44}>Don't worry, you can always reset it</Text.Regular>

            <FormContainer>
                <FormField label="Email" placeholder="Email you've used to register" onChange={setEmail} />
                <Button
                    mb={15}
                    size="medium"
                    onClick={() => dispatch(authActions.sendResetLink.request({ email }))}
                    label="Send me the link"
                />
            </FormContainer>
        </Container>
    );
}
