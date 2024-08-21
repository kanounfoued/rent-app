import { api } from 'api/ApiClient';
import useQuery from 'hooks/useQuery.hook';
import { QueryParams } from 'models/api.model';
import { ENTITIES } from 'models/entities.model';
import { User } from 'models/user.model';

const queryFactoryKeys = {
  all: (queryParams?: QueryParams<User>) =>
    [ENTITIES.USER, queryParams] as const,
  byId: (id: string) => [ENTITIES.USER, id] as const,
};

export const useGetUsers = ({
  queryParams,
}: {
  queryParams?: QueryParams<User>;
}) => {
  const apiClient = api<User[]>();

  return useQuery({
    queryKey: queryFactoryKeys.all(queryParams),
    queryFn: () => apiClient.get({ entity: ENTITIES.USER }),
  });
};

export const useGetUserById = (id: string) => {
  const apiClient = api<User>();

  return useQuery({
    queryKey: queryFactoryKeys.byId(id),
    queryFn: () => apiClient.getById({ entity: ENTITIES.USER }),
  });
};
