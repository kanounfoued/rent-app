import { useGetUsers } from 'queries/user.query';

export default function Users() {
  const { data: users, isLoading } = useGetUsers({});

  if (isLoading) return <div>Loading...</div>;

  return <div>{users?.data.map((user) => <div>{user.first_name}</div>)}</div>;
}
