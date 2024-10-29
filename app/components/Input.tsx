import { LegacyRef } from 'react';

import inputCssUrl from '../styles/input.css?url';

export const links = [{ rel: 'stylesheet', href: inputCssUrl }];

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
  return (
    <div>
      <label htmlFor={labelFor}>{label}</label>
      <input ref={reference} {...props} />
      {!isInputValid ? (
        <small className="inputErrorMessage">{error}</small>
      ) : (
        <>{hint && <small className="inputHint">{hint}</small>}</>
      )}
    </div>
  );
};
