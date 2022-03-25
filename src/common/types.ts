import { UnpaperServiceClient } from 'api/proto/v1/Unpaper-serviceServiceClientPb';

export type TernaryStatus = 'LOADING' | 'READY' | 'ERROR';

export interface RPCRequest<P> {
    client: UnpaperServiceClient;
    params: P;
}

export type Margins = {
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
};

export type MsgSender = 'self' | 'admin' | 'adminSelf' | 'external';
