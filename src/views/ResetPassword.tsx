import { CENTER_CONTENT_WIDTH } from 'common/constants';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as Text from 'components/Text';
import FormField from 'components/FormField';
import Button from 'components/Button';
import { useDispatch } from 'react-redux';
import * as authActions from 'modules/auth/actions';
import { RouteComponentProps } from 'react-router';

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
    margin-top: 44px;
    display: flex;
    flex-wrap: wrap;
    margin: 44px -16px 0 -16px;
    & > * {
        flex: 1 1 120px;
        margin: 4px 16px;
        width: 100%;
    }
`;

const StyledButton = styled(Button)`
    margin-right: auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export default function ResetPassword(_: RouteComponentProps) {
    const [newPassword, setNewPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const dispatch = useDispatch();
    const resetPassword = () => dispatch(authActions.resetPassword.request({ newPassword, repeat, verificationToken: getTokenFromURL() }));

    return (
        <Container>
            <Text.Title>Enter your new password</Text.Title>
            <Text.Regular>It should contain at least 8 characters</Text.Regular>

            <FormContainer>
                <FormField password label="Password" placeholder="New password" onChange={setNewPassword} />
                <FormField password label="Repeat" placeholder="Repeat your password" onChange={setRepeat} />
            </FormContainer>

            <StyledButton mt={24} size="big" onClick={resetPassword} label="Change password" />
        </Container>
    );
}

function getTokenFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('token') ?? '';
}
