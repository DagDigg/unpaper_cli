import * as pb from 'api/proto/v1/notifications_pb';
import Notification from 'components/Notification';
import React from 'react';
import { isMobile } from 'react-device-detect';
import { toast, ToastOptions } from 'react-toastify';

type Params = {
    label: string;
    type?: 'default' | 'success' | 'error' | 'notification';
    notification?: pb.Notification.AsObject;
};

export function addToast(params: Params) {
    const defaultParams: ToastOptions = {
        position: isMobile ? 'top-center' : 'top-right',
        autoClose: 5000,
    };

    switch (params.type) {
        case 'default':
            return toast(params.label, defaultParams);
        case 'success':
            return toast.success(params.label, defaultParams);
        case 'error':
            return toast.error(params.label, defaultParams);
        case 'notification':
            return toast(() => <Notification notification={params.notification!} />, {
                ...defaultParams,
                className: 'Toastify__toast--notification',
            });
        default:
            return toast(params.label, defaultParams);
    }
}
