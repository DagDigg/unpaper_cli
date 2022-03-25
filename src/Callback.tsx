import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from 'modules/auth/actions';
import { RouteComponentProps } from 'react-router';

export default function Callback(props: RouteComponentProps) {
    const dispatch = useDispatch();
    const searchStr = window.location.search;

    useEffect(() => {
        dispatch(authActions.googleCallback.request({ searchStr }));
    }, [searchStr, dispatch]);

    return <p>loading...</p>;
}
