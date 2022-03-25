import * as grpcWeb from 'grpc-web';

// The StreamInterceptor interface is for the callback-based client.
export class Interceptor implements grpcWeb.StreamInterceptor<any, any> {
    intercept(request: grpcWeb.Request<any, any>, invoker: (request: grpcWeb.Request<any, any>) => grpcWeb.ClientReadableStream<any>) {
        class InterceptedStream implements grpcWeb.ClientReadableStream<any> {
            stream: grpcWeb.ClientReadableStream<any>;
            constructor(stream: grpcWeb.ClientReadableStream<any>) {
                this.stream = stream;
            }
            on(eventType: string, callback: any) {
                if (eventType === 'data') {
                    this.stream.on(eventType, callback);
                } else if (eventType === 'error') {
                    const newCallback = (response: any) => {
                        if (response.code === 16) {
                        }
                        callback(response);
                    };
                    this.stream.on('error', newCallback);
                } else if (eventType === 'metadata') {
                    this.stream.on('metadata', callback);
                } else if (eventType === 'status') {
                    this.stream.on('status', callback);
                } else if (eventType === 'end') {
                    this.stream.on('end', callback);
                }
                return this;
            }
            removeListener(eventType: string, callback: any) {}
            cancel() {}
        }
        return new InterceptedStream(invoker(request));
    }
}
