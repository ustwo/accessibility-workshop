import { StatusDot } from '../icons';
import statusCssUrl from '../styles/status.css?url';

export const links = [{ rel: 'stylesheet', href: statusCssUrl }];

type StatusProps = {
  variant: keyof typeof statusVariants;
};


const statusVariants = {
  active: {
    color: 'var(--success)',
    backgroundColor: 'var(--backgroundSuccess)',
  },
  inactive: {
    color: 'var(--error)',
    backgroundColor: 'var(--backgroundSuccess)',
  },
};

export const Status = ({ variant }: StatusProps) => {
  return (
    <div className="status" style={statusVariants[variant]}>
      <StatusDot />
      <p>{variant}</p>
    </div>
  );
};
