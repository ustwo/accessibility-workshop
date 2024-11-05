import { Link } from '@remix-run/react';

import authenticatedHeaderCssUrl from '../styles/authenticatedHeader.css?url';
import { Input, links as inputLink } from '../components/Input';

import { Button } from './Button';

export const links = [
  { rel: 'stylesheet', href: authenticatedHeaderCssUrl },
  ...inputLink,
];

export const AuthenticatedHeader = () => {
  return (
    <div className="authenticatedHeader">
      <div>
        <Button variant="clean">
          <img src="../../menu.svg" alt="side menu button" />
        </Button>
        <Link to="/">medicare</Link>
      </div>
      <div>
        <Input
          type="search"
          placeholder="Search for specialties and symptoms"
        />
      </div>
      <div>
        <Button variant="clean">
          <img src="../../notification.svg" alt="side menu button" />
        </Button>
        <Button variant="clean">
          <img src="../../settings.svg" alt="side menu button" />
        </Button>
      </div>
    </div>
  );
};
