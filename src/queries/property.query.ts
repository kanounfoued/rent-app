import { ENTITIES } from 'models/entities.model';
import { Property } from 'models/property.model';
import { useEntityQueries } from './entityQueries.query';

export const usePropertyApi = () => {
  const { useGet: useGetProperties, useGetById: useGetPropertyById } =
    useEntityQueries<Property>(ENTITIES.PROPERTY);

  return {
    useGetProperties,
    useGetPropertyById,
  };
};
