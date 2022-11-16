export default interface ApiResponse<T> {
    code: string;
    message: string;
    payload: T;
}
