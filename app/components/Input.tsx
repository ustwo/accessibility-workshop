import inputCssUrl from '../styles/input.css?url';

export const links = [{ rel: 'stylesheet', href: inputCssUrl }];

type InputProps = {
  hint?: string;
  error?: string;
  isInputValid?: boolean;
} & JSX.IntrinsicElements['input'];

export const Input = ({ hint, error, isInputValid, ...props }: InputProps) => {
  return (
    <div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
      />
      {!isInputValid ? (
        <small className="inputErrorMessage">{error}</small>
      ) : (
        <>{hint && <small className="inputHint">{hint}</small>}</>
      )}
    </div>
  );
};
