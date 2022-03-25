import Button from 'components/Button';
import FormField from 'components/FormField';
import * as authActions from 'modules/auth/actions';
import * as mainAuthActions from 'modules/main/auth/actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Text from 'components/Text';
import { Container, FluidRow, StyledLink } from './elements';
import Line from 'components/Line';
import Link from 'components/Link';
import GoogleButton from 'components/GoogleButton';
import { RouteComponentProps } from 'react-router';

export default function SignIn(props: RouteComponentProps) {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const googleSignIn = () => dispatch(authActions.googleLogin.request());
    const emailSignin = () => dispatch(mainAuthActions.emailSignin.request({ email, password, api: 'v1' }));

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            emailSignin();
        }
    };

    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'baseline', whiteSpace: 'pre-wrap' }}>
                <Text.Large>Sign in</Text.Large>
                <Text.Small color="smContrast-1">{' _ '}</Text.Small>
                <Link to="signup" label="Sign up" />
            </div>

            <FormField mt={24} type="email" label="Email" placeholder="Email" onChange={setEmail} />
            <FormField mt={18} type="password" label="Password" placeholder="Password" onChange={setPassword} onKeyDown={handleKeyDown} />
            <StyledLink to="/forgot-password" label="Forgot your password?" />

            <Button fluid mt={40} size="medium" label="Sign in" onClick={emailSignin} />

            <FluidRow>
                <Line />
                <Text.Small mr={8} ml={8} color="smContrast-1">
                    or
                </Text.Small>
                <Line />
            </FluidRow>
            <FluidRow>
                <GoogleButton label="Sign in with Google" onClick={googleSignIn} />
            </FluidRow>
        </Container>
    );
}
