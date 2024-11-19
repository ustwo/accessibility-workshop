import { LegacyRef } from 'react';

type ButtonProps = {
  variant: keyof typeof buttonVariants;
  reference?: LegacyRef<HTMLButtonElement>;
  size?: keyof typeof buttonSizes;
} & JSX.IntrinsicElements['button'];

const buttonSizes = {
  small: {
    height: '36px',
    padding: '8px 16px',
    fontSize: '15px',
    lineHeight: '20px',
  },
  medium: {
    height: '43px',
    padding: '12px',
    fontSize: '14px',
    lineHeight: '18.9px',
  },
  large: {
    height: '52px',
    padding: '14.5px 24px',
    fontSize: '17px',
    lineHeight: '22.95px',
  },
  hug: {},
};

const buttonVariants = {
  default: {
    borderRadius: '10px',
    color: 'white',
    backgroundColor: '#6978ff',
    border: 'none',
    fontWeight: '500',
    fontFamily: 'DM Sans',
  },
  form: {
    borderRadius: '26px',
    height: '50px',
    color: 'var(--textButton)',
    backgroundColor: 'var(--textTertiary)',
    border: 'none',
    fontWeight: '600',
    padding: '0px',
    fontFamily: 'DM Sans',
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
  clean: {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0px',
  },
  tab: {
    color: 'var(--textPrimary)',
    backgroundColor: 'white',
    borderRadius: '8px',
    fontFamily: 'Public Sans',
    fontSize: '15px',
    lineHeight: '20px',
    border: '1.5px solid var(--borderPrimary)',
    padding: '8px 16px',
  },
  tabActive: {
    color: 'white',
    backgroundColor: 'var(--backgroundTertiary)',
    borderRadius: '8px',
    fontFamily: 'Public Sans',
    fontSize: '15px',
    lineHeight: '20px',
    border: '1.5px solid var(--backgroundTertiary)',
    padding: '8px 16px',
  },
};
export const Button = ({
  children,
  variant,
  size = 'hug',
  reference,
  ...props
}: ButtonProps) => {
  const combinedStyle = {
    ...buttonVariants[variant],
    ...buttonSizes[size],
  };
  return (
    <button ref={reference} style={combinedStyle} {...props}>
      {children}
    </button>
  );
};
