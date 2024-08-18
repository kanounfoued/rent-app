export default interface Api<TUrl, TDataModel, TRequestConfig, TResponse> {
  get: (url: TUrl, config?: TRequestConfig) => Promise<TResponse>;
  getById: (url: TUrl, config?: TRequestConfig) => Promise<TResponse>;
  create: (
    url: TUrl,
    body: Partial<TDataModel> | null,
    config?: TRequestConfig,
  ) => Promise<TResponse>;
  update: (
    url: TUrl,
    body: Partial<TDataModel> | null,
    config?: TRequestConfig,
  ) => Promise<TResponse>;
  remove: (url: TUrl, config?: TRequestConfig) => Promise<TResponse>;
}
