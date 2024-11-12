type CardProps = {
  children: JSX.Element;
  variant: keyof typeof cardVariants;
};

const cardVariants = {
  error: {
    borderRadius: '12px',
    backgroundColor: 'var(--backgroundError)',
    border: '1px solid var(--error)',
  },
  default: {
    borderRadius: '20px',
    backgroundColor: 'var(--backgroundCard)',
    padding: '16px 24px',
  },
};

export const Card = ({ children, variant }: CardProps) => {
  return <div style={cardVariants[variant]}>{children}</div>;
};
