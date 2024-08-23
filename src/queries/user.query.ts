import { ENTITIES } from 'models/entities.model';
import { User } from 'models/user.model';
import { useEntityQueries } from './entityQueries.query';

export const useUserApi = () => {
  const { useGet: useGetUsers, useGetById: useGetUserById } =
    useEntityQueries<User>(ENTITIES.USER);

  return {
    useGetUsers,
    useGetUserById,
  };
};
