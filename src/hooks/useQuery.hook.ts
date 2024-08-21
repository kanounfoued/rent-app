import {
  DefinedInitialDataOptions,
  QueryClient,
  QueryKey,
  UseQueryOptions,
  useQuery as useQueryHook,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const queryClient = new QueryClient();

type QueryOptionsProps<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends QueryKey = QueryKey,
> =
  | UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
  | DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>
  | UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>;

const useQuery = <TQueryFnData, TError = AxiosError, TData = TQueryFnData>(
  options: QueryOptionsProps<TQueryFnData, TError, TData>,
) =>
  useQueryHook<TQueryFnData, TError, TData>(
    {
      throwOnError: true,
      retry: 1,
      ...options,
    },
    queryClient,
  );

export default useQuery;
