import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { Stripe } from '@stripe/stripe-js';
import Callback from 'Callback';
import { AUDIO_DIV_ID } from 'common/constants';
import Loader from 'components/Loader';
import StyledToastContainer from 'components/StyledToastContainer';
import UnauthenticatedRoute from 'components/UnauthenticatedRoute';
import { GlobalStyle } from 'GlobalStyle';
import * as authActions from 'modules/auth/actions';
import * as authSelectors from 'modules/auth/selectors';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Auth from 'views/Auth';
import Checkout from 'views/Checkout';
import EmailVerify from 'views/EmailVerify';
import ForgotPassword from 'views/ForgotPassword';
import Home from 'views/Home';
import PickUsername from 'views/PickUsername';
import PlanSelection from 'views/PlanSelection';
import RefreshConnectLink from 'views/RefreshConnectLink';
import ResetPassword from 'views/ResetPassword';
import Room from 'views/Room';
import UpgradeSplash from 'views/UpgradeSplash';
import { colors } from './uikit';
import * as notificationActions from 'modules/notifications/actions';
import { history } from 'common/history';

type Props = {
    stripePromise: Promise<Stripe | null>;
};
export default function App(props: Props) {
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const authStatus = useSelector(authSelectors.selectAuthStatus);
    const invertTheme = () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.setUserOnline());
        dispatch(notificationActions.listenForNotifications());

        const isNotSignRoute = !['/auth/signup', '/auth/signin'].includes(window.location.pathname);
        const isNotAuthenticated = authStatus === 'ERROR';
        if (isNotAuthenticated && isNotSignRoute) {
            // @ts-ignore
            window.google?.accounts.id.initialize({
                client_id: '537334174968-lv3t0lnlqdi51kchp55eu5eitbngrc74.apps.googleusercontent.com',
                ux_mode: 'redirect',
                callback: (data: { clientId: string; credential: string }) => {
                    dispatch(authActions.googleOneTap.request({ clientId: data.clientId, idToken: data.credential }));
                },
                nonce: uuidv4(),
            });
            // @ts-ignore
            window.google?.accounts.id.prompt((notification: any) => {
                console.log(notification);
            });
        }
    }, [authStatus, dispatch]);

    return authStatus === 'LOADING' ? (
        <Loader />
    ) : (
        <ThemeProvider theme={theme === 'light' ? colors.light : colors.dark}>
            <GlobalStyle />
            <StyledToastContainer />
            <div
                style={{
                    width: '15px',
                    height: '15px',
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: '120px',
                    right: '10px',
                    zIndex: 9999,
                }}
                onClick={invertTheme}
            />
            <div id={AUDIO_DIV_ID} />

            <Elements stripe={props.stripePromise}>
                <Router history={history}>
                    <Switch>
                        <UnauthenticatedRoute key="auth" path="/auth" component={Auth} />
                        <UnauthenticatedRoute key="verify" path="/verify" component={EmailVerify} />
                        <Route key="checkout" path="/checkout" component={Checkout} />
                        <Route key="google-callback" path="/login/google/callback" component={Callback} />
                        <Route key="plan-selection" path="/plan-select" component={PlanSelection} />
                        <Route key="upgrade-plan" path="/upgrade" component={UpgradeSplash} />
                        <Route key="room" path="/room/:id" component={Room} />
                        <Route key="forgot-password" path="/forgot-password" component={ForgotPassword} />
                        <Route key="reset-password" path="/reset-password" component={ResetPassword} />
                        <Route key="pick-username" path="/pick-username" component={PickUsername} />
                        <Route key="refresh-connect-link" path="/refresh-connect-link" component={RefreshConnectLink} />
                        <Route path="" component={Home} />
                    </Switch>
                </Router>
            </Elements>
        </ThemeProvider>
    );
}
