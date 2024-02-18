import useQueryHook from 'hooks/useQuery.hook';
import { ENTITIES } from 'models/entities.model';

export default function Property() {
  const { isLoading, error, data } = useQueryHook({
    queryKey: [ENTITIES.PROPERTY],
    queryFn: () =>
      fetch('https://api.github.com/repos/TanStack/query').then((res) =>
        res.json(),
      ),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>`An error has occurred: ${error.message}`</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
}
