import { ErrorBoundaryFallback } from 'components/ErrorBoundary';
import { PageNotFound } from 'components/PageNotFound';
import { Signup } from 'features/Signup';
import { Home } from 'features/home';
import { Login } from 'features/login';
import { Property } from 'features/property';
import { ReactNode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ROUTES from './routes';

const errorElement: ReactNode = <ErrorBoundaryFallback />;

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <Home />,
      errorElement,
      children: [],
    },
    {
      path: `${ROUTES.PROPERTY}`,
      element: <Property />,
      errorElement,
      children: [],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  const auth_router = createBrowserRouter([
    {
      path: `${ROUTES.LOGIN}`,
      element: <Login />,
      errorElement,
      children: [],
    },
    {
      path: `${ROUTES.SIGNUP}`,
      element: <Signup />,
      errorElement,
      children: [],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  if (localStorage.getItem('token') !== null) {
    return <RouterProvider router={router} />;
  }

  return <RouterProvider router={auth_router} />;
}
