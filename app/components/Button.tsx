type ButtonProps = {
  variant: keyof typeof buttonVariants;
} & JSX.IntrinsicElements['button'];

const buttonVariants = {
  form: {
    borderRadius: '26px',
    height: '50px',
    color: '#f1f1f6',
    backgroundColor: '#6978ff',
    border: 'none',
    fontWeight: '600',
    fontSize: '17px',
    lineHeight: '22.95px',
  },
};
export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      style={buttonVariants[variant]}
    >
      {children}
    </button>
  );
};
