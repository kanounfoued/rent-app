import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosInstance from 'config/axios.config';
import Api from 'models/api.model';
import { ENTITIES } from 'models/entities.model';

class ApiClient<TDataModel>
  implements
    Api<
      ENTITIES,
      TDataModel,
      AxiosRequestConfig<TDataModel>,
      AxiosResponse<TDataModel>
    >
{
  private readonly axiosInstance: AxiosInstance;
  private readonly default_config: AxiosRequestConfig;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.default_config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  get(
    entity: ENTITIES,
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.get(`${entity}`, {
      ...this.default_config,
      ...config,
    });
  }

  getById(
    entity: ENTITIES,
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.get(entity, {
      ...this.default_config,
      ...config,
    });
  }

  update(
    entity: ENTITIES,
    body: Partial<TDataModel> | null,
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.put(entity, body, {
      ...this.default_config,
      ...config,
    });
  }

  create(
    entity: ENTITIES,
    body: Partial<TDataModel> | null,
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.post(entity, body, {
      ...this.default_config,
      ...config,
    });
  }

  remove(
    entity: ENTITIES,
    config?: AxiosRequestConfig<Partial<TDataModel>> | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.delete(entity, {
      ...this.default_config,
      ...config,
    });
  }
}

const api = <TDataModel>() => new ApiClient<TDataModel>(axiosInstance);

export { ApiClient, api };
