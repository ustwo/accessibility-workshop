import { Link } from '@remix-run/react';

import agreementCssUrl from '../styles/agreement.css?url';

export const links = [{ rel: 'stylesheet', href: agreementCssUrl }];

export const Agreement = () => {
  return (
    <div id='agreement'>
      <p>
        By creating an account, you agree to our
        <Link to="/terms_and_conditions"> Terms & Conditions</Link> and
        <Link to="/privacy_policy"> Privacy Policy</Link>.
      </p>
    </div>
  );
};
