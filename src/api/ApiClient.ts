import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from 'config/axios.config';
import Api, { QueryParams } from 'models/api.model';
import { ENTITIES } from 'models/entities.model';

class ApiClient<TDataModel>
  implements
    Api<TDataModel, AxiosRequestConfig<TDataModel>, AxiosResponse<TDataModel>>
{
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
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined;
  }): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.get(`${this.url}/${entity}`, {
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
  }): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.get(`${this.url}/${entity}`, {
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
  }): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.put(`${this.url}/${entity}`, body, {
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
  }): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.post(`${this.url}/${entity}`, body, {
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
  }): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.delete(`${this.url}/${entity}`, {
      ...this.default_config,
      ...config,
      params,
    });
  }
}

const api = <TDataModel>() => new ApiClient<TDataModel>(axiosInstance);

export { ApiClient, api };
