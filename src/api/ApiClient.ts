import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from 'config/axios.config';
import Api, { QueryParams } from 'models/api.model';
import { ENTITIES } from 'models/entities.model';

class ApiClient<TDataModel> implements Api<TDataModel> {
  private readonly axiosInstance: AxiosInstance;
  private readonly default_config: AxiosRequestConfig;

  readonly url = `api/v1`;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.default_config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  get({
    entity,
    params,
    config,
  }: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: AxiosRequestConfig<Partial<TDataModel>>;
  }) {
    return this.axiosInstance.get<
      TDataModel,
      AxiosResponse<TDataModel[]>,
      TDataModel
    >(`${this.url}/${entity}`, {
      ...this.default_config,
      ...config,
      params,
    });
  }

  getById({
    entity,
    params,
    config,
  }: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined;
  }) {
    return this.axiosInstance.get<
      TDataModel,
      AxiosResponse<TDataModel>,
      TDataModel
    >(`${this.url}/${entity}`, {
      ...this.default_config,
      ...config,
      params,
    });
  }

  update({
    entity,
    body,
    params,
    config,
  }: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    body: Partial<TDataModel> | null;
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined;
  }) {
    return this.axiosInstance.put<
      TDataModel,
      AxiosResponse<TDataModel>,
      Partial<TDataModel> | null
    >(`${this.url}/${entity}/update`, body, {
      ...this.default_config,
      ...config,
      params,
    });
  }

  create({
    entity,
    params,
    body,
    config,
  }: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    body: Partial<TDataModel> | null;
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined;
  }) {
    return this.axiosInstance.post<
      TDataModel,
      AxiosResponse<TDataModel>,
      Partial<TDataModel> | null
    >(`${this.url}/${entity}/create`, body, {
      ...this.default_config,
      ...config,
      params,
    });
  }

  remove({
    entity,
    params,
    config,
  }: {
    entity: ENTITIES;
    params?: QueryParams<TDataModel>;
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined;
  }) {
    return this.axiosInstance.delete<
      TDataModel,
      AxiosResponse<TDataModel>,
      TDataModel
    >(`${this.url}/${entity}`, {
      ...this.default_config,
      ...config,
      params,
    });
  }
}

const useApi = <TDataModel>() => {
  // get the token
  // get the logout method

  const api = new ApiClient<TDataModel>(
    axiosInstance({
      baseURL: '',
      token: '',
      logout: () => {
        console.log('logout');
      },
    }),
  );

  return api;
};

export { ApiClient, useApi };
