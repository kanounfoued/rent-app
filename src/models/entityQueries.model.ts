import { QueryParams } from './api.model';

export type GetProps<TDataModel> = {
  queryParams?: QueryParams<TDataModel>;
};
