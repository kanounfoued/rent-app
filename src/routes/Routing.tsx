import { Signup } from 'features/Signup';
import { Home } from 'features/home';
import { Login } from 'features/login';
import { Property } from 'features/property';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ROUTES from './routes';

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <Home />,
      children: [],
    },
    {
      path: ROUTES.PROPERTY,
      element: <Property />,
      children: [],
    },
    {
      path: '*',
      element: <Home />,
      children: [],
    },
  ]);

  const auth_router = createBrowserRouter([
    {
      path: ROUTES.LOGIN,
      element: <Login />,
      children: [],
    },
    {
      path: ROUTES.SIGNUP,
      element: <Signup />,
      children: [],
    },
    {
      path: '*',
      element: <Login />,
    },
  ]);

  if (localStorage.getItem('token') !== null) {
    return <RouterProvider router={router} />;
  }

  return <RouterProvider router={auth_router} />;
}
