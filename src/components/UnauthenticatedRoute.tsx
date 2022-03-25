import { Redirect, Route, RouteProps } from 'react-router';
import * as authSelectors from 'modules/auth/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

type Props = RouteProps;

export default function UnauthenticatedRoute(props: Props) {
    const { component: Component, ...rest } = props;
    const authModuleStatus = useSelector(authSelectors.selectAuthModuleStatus);

    switch (authModuleStatus) {
        case 'READY':
            // User is authenticated
            return <Redirect from="/*" to="/" />;
        case 'ERROR':
            // User is NOT authenticated
            return <Route component={Component} {...rest} />;
        case 'LOADING':
        default:
            return <p>Loading...</p>;
    }
}
