import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as authSelectors from 'modules/auth/selectors';
import * as mainAuthActions from 'modules/main/auth/actions';
import * as mainAuthSelectors from 'modules/main/auth/selectors';
import { RouteComponentProps } from 'react-router';

export default function EmailVerify(_: RouteComponentProps) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const code = urlSearchParams.get('code');
    const user = useSelector(authSelectors.selectUser);
    const emailVerifyStatus = useSelector(mainAuthSelectors.selectEmailVerifyStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user?.emailVerified) {
            dispatch(mainAuthActions.emailVerify.request({ verificationToken: code ?? '' }));
        }
    }, [user, dispatch, code]);

    return emailVerifyStatus === 'FAILURE' ? <p>TODO: RETRY</p> : <></>;
}
