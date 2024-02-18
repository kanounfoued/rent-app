'use client';

import { Button } from 'antd';
import { useNavigate, useRouteError } from 'react-router-dom';
import ROUTES from 'routes/routes';

type ApiError = {
  code: string;
  error: string;
};

type ErrorBoundary = ApiError;

export default function ErrorBoundaryFallback() {
  const navigate = useNavigate();

  const error: ErrorBoundary = useRouteError() as ErrorBoundary;

  return (
    <>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.error}</pre>
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
