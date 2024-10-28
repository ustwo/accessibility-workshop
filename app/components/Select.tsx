import { useLocation } from '@remix-run/react';

import selectCssUrl from '../styles/select.css?url';
import { locationValues } from '../constants/locations';

export const links = [{ rel: 'stylesheet', href: selectCssUrl }];

type SelectProps = {
  error?: string;
  isInputValid?: boolean;
  label?: string;
} & JSX.IntrinsicElements['select'];

export const Select = ({
  error,
  isInputValid,
  label,
  ...props
}: SelectProps) => {
  const location = useLocation();
  const pathName: string = location.pathname;
  const version = pathName.slice(-2) as keyof typeof locationValues;

  return (
    <div>
      <label>{label}</label>
      <select {...props}>
        {locationValues[version].map(({ label, value }) => (
          <option key={value} value={value} hidden={!value} disabled={!value}>
            {label}
          </option>
        ))}
      </select>
      {!isInputValid ? (
        <small className="selectErrorMessage">{error}</small>
      ) : null}
    </div>
  );
};
