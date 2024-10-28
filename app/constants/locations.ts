const defaultLocationValues = [
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

export const locationValues = {
  v1: [
    {
      label: 'Location',
      value: '',
    },
  ].concat(defaultLocationValues),
  v2: [
    {
      label: 'London',
      value: '',
    },
  ].concat(defaultLocationValues),
};
