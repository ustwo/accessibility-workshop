import { Link, useLocation } from '@remix-run/react';

import agreementCssUrl from '../styles/agreement.css?url';

export const links = [{ rel: 'stylesheet', href: agreementCssUrl }];

export const Agreement = () => {
  const location = useLocation();
  const pathName: string = location.pathname;
  const version = pathName.slice(-2);
  const style = version !== 'v3' ? { textDecoration: 'none' } : undefined;
  return (
    <div className="agreement">
      <p>
        By creating an account, you agree to our
        <Link style={style} to="/terms_and_conditions">
          {' '}
          Terms & Conditions
        </Link>{' '}
        and
        <Link style={style} to="/privacy_policy">
          {' '}
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};
