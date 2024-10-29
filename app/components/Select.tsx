import { LegacyRef } from 'react';

import { useLocation } from '@remix-run/react';

import selectCssUrl from '../styles/select.css?url';
import { locationValues } from '../constants/locations';

export const links = [{ rel: 'stylesheet', href: selectCssUrl }];

type SelectProps = {
  error?: string;
  isInputValid?: boolean;
  label?: string;
  labelFor?: string;
  reference?: LegacyRef<HTMLSelectElement>;
} & JSX.IntrinsicElements['select'];

export const Select = ({
  error,
  isInputValid,
  label,
  labelFor,
  reference,
  ...props
}: SelectProps) => {
  const location = useLocation();
  const pathName: string = location.pathname;
  const version = pathName.slice(-2) as keyof typeof locationValues;
  const style =
    version === 'v3'
      ? { backgroundImage: "url('../../selectArrowAccessible.svg')" }
      : undefined;

  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <select style={style} ref={reference} {...props}>
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
