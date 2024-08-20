import { api } from 'api/ApiClient';
import useQuery from 'hooks/useQuery.hook';
import { QueryParams } from 'models/api.model';
import { ENTITIES } from 'models/entities.model';
import { Property } from 'models/property.model';

const queryFactoryKeys = {
  all: (queryParams?: QueryParams<Property>) =>
    [ENTITIES.PROPERTY, queryParams] as const,
  byId: (id: string) => [ENTITIES.PROPERTY, id] as const,
};

export const useGetProperties = ({
  queryParams,
}: {
  queryParams?: QueryParams<Property>;
}) => {
  const apiClient = api<Property>();

  return useQuery({
    queryKey: queryFactoryKeys.all(queryParams),
    queryFn: () => apiClient.get({ entity: ENTITIES.PROPERTY }),
  });
};

export const useGetPropertyById = (id: string) => {
  const apiClient = api<Property>();

  return useQuery({
    queryKey: queryFactoryKeys.byId(id),
    queryFn: () => apiClient.getById({ entity: ENTITIES.PROPERTY }),
  });
};
