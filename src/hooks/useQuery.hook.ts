import { useQuery } from '@tanstack/react-query';

type Props<TResponse> = {
  queryKey: Array<string>;
  queryFn: () => Promise<TResponse>;
};

export default function useQueryHook<TResponse>({
  queryKey,
  queryFn,
}: Props<TResponse>) {
  return useQuery({
    queryKey,
    queryFn,
  });
}
