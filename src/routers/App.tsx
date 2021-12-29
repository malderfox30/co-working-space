import { loadable } from '@base-projects/web-uikit';
import { useRoutes } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import PrivateRoute from './PrivateRoute';

const Login = loadable(import('../pages/Login'));
const ForgotPassword = loadable(import('../pages/ForgotPassword'));
const ResetPassword = loadable(import('../pages/ResetPassword'));

const App = () => {
  const routes = useRoutes([
    {
      path: 'login',
      element: (
        <GuardRoute>
          <Login />
        </GuardRoute>
      ),
    },
    {
      path: '/forgot-password',
      element: (
        <GuardRoute>
          <ForgotPassword />
        </GuardRoute>
      ),
    },
    {
      path: '/reset-password',
      element: (
        <GuardRoute>
          <ResetPassword />
        </GuardRoute>
      ),
    },
    {
      path: '/*',
      element: (
        <GuardRoute isPrivate>
          <PrivateRoute />
        </GuardRoute>
      ),
    },
  ]);

  return routes;
};

export default App;
