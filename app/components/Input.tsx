import { LegacyRef } from 'react';

import { useLocation } from '@remix-run/react';

import inputCssUrl from '../styles/input.css?url';

import { ErrorMessage, links as errorMessageLink } from './ErrorMessage';

export const links = [
  { rel: 'stylesheet', href: inputCssUrl },
  ...errorMessageLink,
];

type InputProps = {
  hint?: string;
  error?: string;
  isInputValid?: boolean;
  label?: string;
  labelFor?: string;
  reference?: LegacyRef<HTMLInputElement>;
} & JSX.IntrinsicElements['input'];

export const Input = ({
  hint,
  error,
  isInputValid,
  label,
  labelFor,
  reference,
  ...props
}: InputProps) => {
  const location = useLocation();
  const pathName: string = location.pathname;
  const version: string = pathName.slice(-2);
  const className = version === 'v3' ? 'accessibleInputHint' : 'inputHint';

  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <input ref={reference} {...props} />
      {!isInputValid ? (
        <ErrorMessage error={error} />
      ) : (
        <>{hint && <small id={props['aria-describedby']} className={className}>{hint}</small>}</>
      )}
    </div>
  );
};
