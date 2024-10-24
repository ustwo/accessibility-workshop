import selectCssUrl from '../styles/select.css?url';

export const links = [{ rel: 'stylesheet', href: selectCssUrl }];

type SelectProps = {
  error?: string;
  isInputValid?: boolean;
} & JSX.IntrinsicElements['select'];

const locationValues = [
  {
    label: 'Location',
    value: '',
  },
  {
    label: 'Lisbon',
    value: 'lisbon',
  },
  {
    label: 'Porto',
    value: 'porto',
  },
  {
    label: 'New York',
    value: 'newYork',
  },
  {
    label: 'Malmo',
    value: 'malmo',
  },
  {
    label: 'Tokyo',
    value: 'tokyo',
  },
];

export const Select = ({
  defaultValue,
  name,
  onChange,
  error,
  isInputValid,
}: SelectProps) => {
  return (
    <div>
      <select
        defaultValue={defaultValue}
        name={name}
        onChange={onChange}
        required
      >
        {locationValues.map(({ label, value }) => (
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
