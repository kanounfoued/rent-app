import { Button } from 'antd';
import { AxiosError } from 'axios';
import { useNavigate, useRouteError } from 'react-router-dom';
import ROUTES from 'routes/routes';

type ErrorBoundary = AxiosError;

export default function ErrorBoundary() {
  const navigate = useNavigate();

  const error: ErrorBoundary = useRouteError() as ErrorBoundary;
  console.log('error', error);

  if (!error?.response) {
    // client error
    return null;
  }

  if (error.response.status > 500) {
    // server error
    return <div>server error</div>;
  }

  if (error.response.status === 403) {
    // unauthorized resource
    return <div>unauthorized resource</div>;
  }

  if (error.response.status === 404) {
    // not found
    return <div>not found</div>;
  }

  // something went wrong
  return (
    <>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.code}</pre>
      <Button
        onClick={() => {
          navigate(ROUTES.HOME);
        }}
      >
        Back home
      </Button>
    </>
  );
}
