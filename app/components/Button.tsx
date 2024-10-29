import { LegacyRef } from 'react';

type ButtonProps = {
  variant: keyof typeof buttonVariants;
  reference?: LegacyRef<HTMLButtonElement>;
} & JSX.IntrinsicElements['button'];

const buttonVariants = {
  form: {
    borderRadius: '26px',
    height: '50px',
    color: 'var(--textButton)',
    backgroundColor: 'var(--textTertiary)',
    border: 'none',
    fontWeight: '600',
    fontSize: '17px',
    lineHeight: '22.95px',
  },
  errorLink: {
    color: 'var(--error)',
    border: 'none',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18.9px',
    background: 'none',
    textDecoration: 'underline',
    margin: '0px',
  },
};
export const Button = ({
  children,
  variant,
  reference,
  ...props
}: ButtonProps) => {
  return (
    <button ref={reference} style={buttonVariants[variant]} {...props}>
      {children}
    </button>
  );
};
