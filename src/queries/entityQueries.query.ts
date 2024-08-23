import { QueryKey, useQuery } from '@tanstack/react-query';
import { useApi } from 'api/ApiClient';
import { queryClient } from 'hooks/useQuery.hook';
import { QueryParams } from 'models/api.model';
import { ENTITIES, Entity } from 'models/entities.model';
import { GetProps } from 'models/entityQueries.model';

export const useEntityQueries = <TDataModel = Entity>(entity: ENTITIES) => {
  const queryFactoryKeys = (entity: ENTITIES) => ({
    all: (queryParams?: QueryParams<TDataModel>) =>
      [entity, queryParams] as const,
    byId: (id: string) => [entity, id] as const,
  });

  const useInvalidateQuery = (queryKey: QueryKey) =>
    queryClient.invalidateQueries({
      queryKey,
    });

  const useGet = (props?: GetProps<TDataModel>) => {
    const api = useApi<TDataModel>();

    const queryParams = props?.queryParams;

    return useQuery({
      queryKey: queryFactoryKeys(entity).all(queryParams),
      queryFn: () => api.get({ entity }),
    });
  };

  const useGetById = (id: string) => {
    const api = useApi<TDataModel>();

    return useQuery({
      queryKey: queryFactoryKeys(entity).byId(id),
      queryFn: () => api.getById({ entity }),
    });
  };

  const useCreate = () => {
    return null;
  };

  const useUpdate = () => {
    return null;
  };

  const useDelete = () => {
    return null;
  };

  return {
    useInvalidateQuery,
    queryFactoryKeys,
    useGet,
    useGetById,
    useCreate,
    useUpdate,
    useDelete,
  };
};
