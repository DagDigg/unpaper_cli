export interface Response<T> {
    success?: T;
    failure?: { reason: string };
}
export interface SuccessResponse<T> {
    success: T;
}

export function isSuccess(r: Response<any>) {
    return !!r.success;
}
