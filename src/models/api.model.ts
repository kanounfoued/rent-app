export default interface Api<TDataModel, TRequest, TResponse> {
  get: (url: string, config?: TRequest) => Promise<TResponse>;
  delete: (url: string, config?: TRequest) => Promise<TResponse>;
  put: (
    url: string,
    body: Partial<TDataModel> | null,
    config?: TRequest,
  ) => Promise<TResponse>;
  post: (
    url: string,
    body: Partial<TDataModel> | null,
    config?: TRequest,
  ) => Promise<TResponse>;
}
