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
};

export const Card = ({ children, variant }: CardProps) => {
  return <div style={cardVariants[variant]}>{children}</div>;
};
