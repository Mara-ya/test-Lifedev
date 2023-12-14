import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout';
import { CustomersPage } from "pages/Customers";
import './App.scss';
import { ProductPage } from 'pages/Product';
import { DashboardPage } from 'pages/Dashboard';
import { IncomePage } from 'pages/Income';
import { PromotePage } from 'pages/Promote';
import { HelpPage } from 'pages/Help';

const router = createBrowserRouter([
  {
      path: '/test-lifedev/',
      element: <Layout />,
      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />,
        },
        {
          path: 'product',
          element: <ProductPage />,
        },
        {
          index: true,
          path: '',
          element: <CustomersPage />,
        },
        {
          path: 'customers',
          element: <CustomersPage />,
        },
        {
          path: 'income',
          element: <IncomePage />,
        },
        {
          path: 'promote',
          element: <PromotePage />,
        },
        {
          path: 'help',
          element: <HelpPage />,
        },
        {
          path: '*',
          element: <Navigate to="/customers" replace />,
        }
      ],
  },
]);

export const App = () => {
  return (
    <div className='app-wrapper'>
      <RouterProvider router={router} />
    </div>
  );
};
