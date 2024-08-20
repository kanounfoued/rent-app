import { ENTITIES } from './entities.model';

export default interface Api<TDataModel, TRequestConfig, TResponse> {
  get: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: TRequestConfig;
  }) => Promise<TResponse>;
  getById: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: TRequestConfig;
  }) => Promise<TResponse>;
  create: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    body: Partial<TDataModel> | null;
    config?: TRequestConfig;
  }) => Promise<TResponse>;
  update: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    body: Partial<TDataModel> | null;
    config?: TRequestConfig;
  }) => Promise<TResponse>;
  remove: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: TRequestConfig;
  }) => Promise<TResponse>;
}

export type QueryParamsSorterDirection = 'asc' | 'desc';

export type QueryParams<TDataModel> = {
  filters?: Record<keyof TDataModel, unknown>;
  sorters?: {
    column: keyof TDataModel;
    direction: QueryParamsSorterDirection;
  }[];
};
