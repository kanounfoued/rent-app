import { api } from 'api/ApiClient';
import useQuery from 'hooks/useQuery.hook';
import { ENTITIES } from 'models/entities.model';
import { Property } from 'models/property.model';

export const useGetProperties = () => {
  const apiClient = api<Property>();

  return useQuery({
    queryKey: [ENTITIES.PROPERTY],
    queryFn: () => apiClient.get(ENTITIES.PROPERTY),
  });
};

/**
 *
 *
 * unified url
 *
 *
 * create
 *  /entity_name + body
 *
 * update
 * /entity_name + body + id
 *
 *
 * get
 * /entity_name?filters
 *
 *
 * getById
 * /entity_name?filters
 *
 *
 * remove
 * /entity_name?filters
 *
 */
