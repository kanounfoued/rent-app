import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import Signup from 'features/Signup/Signup';
import Contracts from 'features/contract/routes/contracts';
import Home from 'features/home/Home';
import Login from 'features/login/Login';
import Profile from 'features/profile/profile';
import Properties from 'features/property/routes/Properties';
import Transactions from 'features/transaction/routes/transactions';
import Users from 'features/user/routes/Users';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import ROUTES from './routes';
import Settings from 'features/settings/settings';

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
              path: 'browse',
              element: <Properties />,
              ErrorBoundary,
            },
            {
              path: 'me',
              element: <Properties />,
              ErrorBoundary,
            },
            {
              path: 'favorite',
              element: <Properties />,
              ErrorBoundary,
            },
            {
              index: true,
              path: '*',
              element: <Navigate to="browse" replace />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: ROUTES.CONTRACT,
          children: [
            {
              path: 'me',
              element: <Contracts />,
              ErrorBoundary,
            },
            {
              index: true,
              path: '*',
              element: <Navigate to="me" replace />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: ROUTES.TRANSACTION,
          children: [
            {
              path: 'me',
              element: <Transactions />,
              ErrorBoundary,
            },
            {
              index: true,
              path: '*',
              element: <Navigate to="me" replace />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: ROUTES.PROFILE,
          children: [
            {
              index: true,
              element: <Profile />,
              ErrorBoundary,
            },
          ],
        },
        {
          path: ROUTES.SETTINGS,
          children: [
            {
              index: true,
              element: <Settings />,
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
