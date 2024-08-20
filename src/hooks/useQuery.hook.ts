import { QueryKey, useQuery as useQueryHook } from '@tanstack/react-query';
import { AxiosError } from 'axios';

type Props<TResponse> = {
  queryKey: QueryKey;
  queryFn: () => Promise<TResponse>;
};

export default function useQuery<
  TResponse,
  TError = AxiosError<{ message: string }>,
>({ queryKey, queryFn }: Props<TResponse>) {
  /**
   * Per definition
   * useQuery<TQueryFnData = TResponse, TError, TData, TQueryKey>
   *
   * TData = TResponse
   */

  return useQueryHook<TResponse, TError>({
    queryKey,
    queryFn,
  });
}
