import { Outlet } from '@remix-run/react';

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

const Header = () => {
  return (
    <div id="nav-bar">
      <h1>medicare</h1>
    </div>
  );
};
