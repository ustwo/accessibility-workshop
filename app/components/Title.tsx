type TitleProps = {
  title: string;
  variant: keyof typeof titleVariants;
};

const baseStyles = {
  fontFamily: 'DM Sans',
  fontWeight: 'bold',
  margin: '0px',
};
const titleVariants = {
  medium: {
    fontSize: '22px',
    lineHeight: '28.6px',
  },
  large: {
    fontWeight: 'bold',
    fontSize: '32px',
    lineHeight: '24px',
  },
};

export const Title = ({ title, variant }: TitleProps) => {
  const combinedStyle = {
    ...baseStyles,
    ...titleVariants[variant],
  };
  return <h1 style={combinedStyle}>{title}</h1>;
};
