import { RouteComponentProps } from 'react-router';
import Button from 'components/Button';
import FormField from 'components/FormField';
import GoogleButton from 'components/GoogleButton';
import Line from 'components/Line';
import Link from 'components/Link';
import * as Text from 'components/Text';
import * as authActions from 'modules/auth/actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, FluidRow } from './elements';

export default function SignUp(props: RouteComponentProps) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const googleSignUp = () => dispatch(authActions.googleLogin.request());

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'baseline', whiteSpace: 'pre-wrap' }}>
                <Text.Large>Sign up</Text.Large>
                <Text.Small color="smContrast-1">{' _ '}</Text.Small>
                <Link to="signin" label="Sign in" />
            </div>
            <FormField mt={24} label="Username" placeholder="It must not contain spaces" onChange={setUsername} />
            <FormField mt={18} label="Email" placeholder="Email" onChange={setEmail} />
            <FormField mt={18} type="password" label="Password" placeholder="Password" onChange={setPassword} />

            <Button
                fluid
                mt={40}
                size="medium"
                label="Sign up"
                onClick={() => {
                    dispatch(authActions.emailSignup.request({ email, password, username, api: 'v1' }));
                }}
            />

            <FluidRow>
                <Line />
                <Text.Small mr={8} ml={8} color="smContrast-1">
                    or
                </Text.Small>
                <Line />
            </FluidRow>
            <FluidRow>
                <GoogleButton label="Sign up with Google" onClick={googleSignUp} />
            </FluidRow>
        </Container>
    );
}
