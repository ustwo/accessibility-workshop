import { useLocation } from '@remix-run/react';

import errorMessageCssUrl from '../styles/errorMessage.css?url';
import { Warning } from '../icons';

export const links = [{ rel: 'stylesheet', href: errorMessageCssUrl }];

export const ErrorMessage = ({ error }: { error?: string }) => {
  const location = useLocation();
  const pathName: string = location.pathname;
  const version: string = pathName.slice(-2);
  const className =
    version === 'v3' ? 'accessibleErrorMessage' : 'errorMessage';

  if (!error) {
    return null;
  }
  if (version === 'v3') {
    return (
      <div className={className}>
        <Warning />
        <small>{error}</small>
      </div>
    );
  }
  return <small className={className}>{error}</small>;
};
