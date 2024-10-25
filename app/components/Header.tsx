import { Link } from '@remix-run/react';

import headerCssUrl from '../styles/header.css?url';

export const links = [{ rel: 'stylesheet', href: headerCssUrl }];

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">medicare</Link>
    </div>
  );
};
