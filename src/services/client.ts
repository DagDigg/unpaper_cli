import { UnpaperServiceClient } from 'api/proto/v1/Unpaper-serviceServiceClientPb';

export default class Client {
    private static instance: UnpaperServiceClient;
    constructor() {
        Client.instance = new UnpaperServiceClient('https://api.unpaper.io:8443', null, { withCredentials: true });
    }
    static get(): UnpaperServiceClient {
        if (!Client.instance) {
            throw new Error('Client has not been initialized');
        }
        return Client.instance;
    }
}
