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
  clean: {
    border: 'none',
    backgroundColor: 'transparent'
  }
};
export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      style={buttonVariants[variant]}
      {...props}
    >
      {children}
    </button>
  );
};
