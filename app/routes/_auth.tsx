import { Outlet } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';

import { Header, links as headerLink } from '../components/Header';

export const links: LinksFunction = () => {
  return [...headerLink];
};

export default function Auth() {
  return (
    <>
      <Header />
      <div id="auth-main">
        <Outlet />
      </div>
    </>
  );
}
