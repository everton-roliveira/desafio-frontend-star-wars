export interface IResponseContract<T> {
    message: string;
    isSuccess: boolean;
    data: T;
}
