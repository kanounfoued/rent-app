import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ENTITIES } from './entities.model';

export default interface Api<TDataModel> {
  get: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: AxiosRequestConfig<TDataModel>;
  }) => Promise<AxiosResponse<TDataModel[]>>;
  getById: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: AxiosRequestConfig<TDataModel>;
  }) => Promise<AxiosResponse<TDataModel>>;
  create: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    body: Partial<TDataModel> | null;
    config?: AxiosRequestConfig<TDataModel>;
  }) => Promise<AxiosResponse<TDataModel>>;
  update: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    body: Partial<TDataModel> | null;
    config?: AxiosRequestConfig<TDataModel>;
  }) => Promise<AxiosResponse<TDataModel>>;
  remove: (props: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: AxiosRequestConfig<TDataModel>;
  }) => Promise<AxiosResponse<TDataModel>>;
}

export type QueryParamsSorterDirection = 'asc' | 'desc';

export type QueryParams<TDataModel> = {
  filters?: Record<keyof TDataModel, unknown>;
  sorters?: {
    column: keyof TDataModel;
    sort: QueryParamsSorterDirection;
  }[];
};
