import { Link } from '@remix-run/react';

import authenticatedHeaderCssUrl from '../styles/authenticatedHeader.css?url';
import { Input, links as inputLink } from '../components/Input';
import { Menu, Notification, Settings } from '../icons';

import { Button } from './Button';

export const links = [
  { rel: 'stylesheet', href: authenticatedHeaderCssUrl },
  ...inputLink,
];

type AuthenticatedHeaderProps = {
  toggleSidebar: () => void;
};

export const AuthenticatedHeader = ({
  toggleSidebar,
}: AuthenticatedHeaderProps) => {
  return (
    <>
      <div className="authenticatedHeader">
        <div>
          <Button variant="clean" onClick={toggleSidebar} aria-label="Open side menu">
            <Menu />
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
            <Notification />
          </Button>
          <Button variant="clean">
            <Settings />
          </Button>
        </div>
      </div>
    </>
  );
};
