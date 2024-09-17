import { ENTITIES } from 'models/entities.model';
import { Property } from 'models/property.model';
import { useEntityQueries } from './entityQueries.query';

export const usePropertyApi = () => {
  const {
    useGet: useGetProperties,
    useGetById: useGetPropertyById,
    useCreate: useCreateProperty,
    useUpdate: useUpdateProperty,
    useDelete: useDeleteProperty,
  } = useEntityQueries<Property>(ENTITIES.PROPERTY);

  return {
    useGetProperties,
    useGetPropertyById,
    useCreateProperty,
    useUpdateProperty,
    useDeleteProperty,
  };
};
