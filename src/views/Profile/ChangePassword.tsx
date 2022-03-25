import { RouteComponentProps } from 'react-router';
import * as authActions from 'modules/auth/actions';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function ChangePassword(_: RouteComponentProps) {
    const [old, setOld] = useState('');
    const [newPsw, setNewPsw] = useState('');
    const [repeat, setRepeat] = useState('');

    const dispatch = useDispatch();
    const changePassword = () => {
        dispatch(authActions.changePassword.request({ newPassword: newPsw, oldPassword: old, repeat: repeat }));
    };

    return (
        <>
            <input placeholder="old" onChange={(e) => setOld(e.target.value)} />
            <input placeholder="new" onChange={(e) => setNewPsw(e.target.value)} />
            <input placeholder="rep" onChange={(e) => setRepeat(e.target.value)} />

            <button onClick={changePassword}>CHANGE ME</button>
        </>
    );
}
