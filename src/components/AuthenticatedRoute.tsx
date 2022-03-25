import { User } from 'api/proto/v1/auth_pb';
import { history } from 'common/history';
import { setNextRoute } from 'common/nextRoute';
import { TernaryStatus } from 'common/types';
import { History } from 'history';
import * as authSelectors from 'modules/auth/selectors';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';

type PagePermission = 'LOADING' | 'OK' | 'KO';

function AuthenticatedRoute(props: RouteProps) {
    const { component: Component, ...rest } = props;
    const authModuleStatus = useSelector(authSelectors.selectAuthModuleStatus);
    const user = useSelector(authSelectors.selectUser);
    const [pagePermission, setPagePermission] = useState('LOADING');

    useEffect(() => {
        setPagePermission(getPagePermission(authModuleStatus, user, history));
    }, [user, authModuleStatus]);

    switch (pagePermission) {
        case 'OK':
            // User is authenticated
            return <Route component={Component} {...rest} />;
        case 'KO':
            // User is NOT authenticated
            return <Redirect from="/*" to="/auth/signin" />;
        case 'LOADING':
        default:
            return <></>;
    }
}

const usernameRequiredPaths = ['room', 'create-room'];

function shouldPickUsername(user: User.AsObject | null) {
    const hasUsernameSet = user && user.username !== '';
    let res = false;
    if (!hasUsernameSet) {
        usernameRequiredPaths.forEach((p) => {
            if (window.location.pathname.includes(p)) {
                res = true;
                return;
            }
        });
    }

    return res;
}

function getPagePermission(authStatus: TernaryStatus, user: User.AsObject | null, history: History): PagePermission {
    // If user hasn't authenticated, or has no username, should set next route to navigate
    if (authStatus === 'ERROR' || shouldPickUsername(user)) {
        setNextRoute(window.location.href);
    }

    // User hasn't username set
    if (authStatus !== 'ERROR' && shouldPickUsername(user)) {
        // Since after visiting a blocked page you're redirected to '/pick-username'
        // you couldn't go back, since you're now on '/pick-username', and the previous
        // will redirect there again
        window.history.pushState({}, '', window.location.origin + '/');
        history.push('/pick-username');
        return 'LOADING';
    } else {
        switch (authStatus) {
            case 'READY':
                // User is authenticated
                return 'OK';
            case 'ERROR':
                // User is NOT authenticated
                return 'KO';
            case 'LOADING':
            default:
                return 'LOADING';
        }
    }
}

export default React.memo(AuthenticatedRoute);
