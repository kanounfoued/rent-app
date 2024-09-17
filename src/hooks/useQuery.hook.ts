import {
  DefinedInitialDataOptions,
  MutationCache,
  QueryClient,
  QueryKey,
  UseQueryOptions,
  useQuery as useQueryHook,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

// this is a global configuration where it applies for all mutations
// and this invalidation will run first before any other invalidation happens on deep down the tree.
export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    // all succeeded Mutations will be trigger an updated to queries from this point as a global configuration.
    // mutationKeys / queryKeys are accessible through mutation.options.mutationKey, in order to invalidate the correct query.
    onSuccess: (_data, _variables, _context, mutation) => {
      // not returning the promise call of invalidateQueries
      // here tells the client query to not await for the updates after invalidating the queries.
      queryClient.invalidateQueries({
        queryKey: [mutation.options.mutationKey],
      });

      // returning the promise here tells the client query to await for the updates after invalidating the queries.
      // return queryClient.invalidateQueries({
      //   queryKey: [mutation.options.mutationKey],
      // });
    },
  }),
});

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
