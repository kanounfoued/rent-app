import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import Signup from 'features/Signup/Signup';
import Contracts from 'features/contract/routes/contracts';
import Home from 'features/home/Home';
import Login from 'features/login/Login';
import Properties from 'features/property/routes/Properties';
import Transactions from 'features/transaction/routes/transactions';
import Users from 'features/user/routes/Users';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ROUTES from './routes';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <Home />,
      ErrorBoundary,
      children: [
        {
          path: ROUTES.PROPERTY,
          children: [
            {
              index: true,
              element: <Properties />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: ROUTES.CONTRACT,
          children: [
            {
              index: true,
              element: <Contracts />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: ROUTES.TRANSACTION,
          children: [
            {
              index: true,
              element: <Transactions />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: ROUTES.USER,
          children: [
            {
              element: <Users />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: '*',
          element: <PageNotFound />,
        },
      ],
    },
  ]);

  const auth_router = createBrowserRouter([
    {
      path: ROUTES.LOGIN,
      element: <Login />,
      ErrorBoundary,
      children: [],
    },
    {
      path: ROUTES.SIGNUP,
      element: <Signup />,
      ErrorBoundary,
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
