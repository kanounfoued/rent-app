import { Typography } from 'antd';
import { usePropertyApi } from 'queries/property.query';

export default function Properties() {
  const {
    data: properties,
    isLoading,
    error,
  } = usePropertyApi().useGetProperties();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>`An error has occurred: ${error.message}`</div>;

  return (
    <div>
      <Typography.Text>asdfjn</Typography.Text>
      {properties?.data.map((property) => (
        <>
          <h1>Flat {property?.id}</h1>
          <strong>👀 {property?.floor_no}</strong>{' '}
          <strong>🍴 {property.type}</strong>
        </>
      ))}
    </div>
  );
}
