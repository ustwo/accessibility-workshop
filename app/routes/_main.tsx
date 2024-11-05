import { Outlet } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';

import { AuthenticatedHeader, links as authenticatedHeaderLink } from '../components/AuthenticatedHeader';

export const links: LinksFunction = () => {
  return [...authenticatedHeaderLink];
};

export default function Auth() {
  return (
    <>
      <AuthenticatedHeader />
      <div className='dashboard-main'>
        <Outlet />
      </div>
    </>
  );
}
