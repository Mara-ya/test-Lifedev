import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Sidebar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
