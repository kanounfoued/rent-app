import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import Api from "models/api.model";

export default class ApiClient<TDataModel>
  implements Api<TDataModel, AxiosRequestConfig, AxiosResponse<TDataModel>>
{
  private readonly axiosInstance: AxiosInstance;
  private readonly default_config: AxiosRequestConfig;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.default_config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  get(
    url: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.get(url, {
      ...this.default_config,
      ...config,
    });
  }

  put(
    url: string,
    body: Partial<TDataModel> | null,
    config?: AxiosRequestConfig | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.put(url, body, {
      ...this.default_config,
      ...config,
    });
  }

  post(
    url: string,
    body: Partial<TDataModel> | null,
    config?: AxiosRequestConfig | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.post(url, body, {
      ...this.default_config,
      ...config,
    });
  }

  delete(
    url: string,
    config?: AxiosRequestConfig | undefined,
  ): Promise<AxiosResponse<TDataModel>> {
    return this.axiosInstance.delete(url, {
      ...this.default_config,
      ...config,
    });
  }
}
