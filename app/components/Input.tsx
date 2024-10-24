import inputCssUrl from '../styles/input.css?url';

export const links = [{ rel: 'stylesheet', href: inputCssUrl }];

type InputProps = {
  hint?: string;
  error?: string;
  isInputValid?: boolean;
} & JSX.IntrinsicElements['input'];

export const Input = ({
  type,
  placeholder,
  name,
  onChange,
  hint,
  error,
  isInputValid,
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
      {!isInputValid ? (
        <small className="inputErrorMessage">{error}</small>
      ) : (
        <>{hint && <small className="inputHint">{hint}</small>}</>
      )}
    </div>
  );
};
