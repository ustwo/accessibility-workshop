import { Link } from '@remix-run/react';

import sidebarCssUrl from '../styles/sidebar.css?url';
import { Appointments, Explore, Home, Profile } from '../icons';

export const links = [{ rel: 'stylesheet', href: sidebarCssUrl }];

type SidebarProps = {
  isOpen: boolean;
  selectedItem: string;
  setSelectedItem: (arg: string) => void;
};

const sidebarItems = [
  { to: '/dashboard-v1', icon: <Home />, label: 'Home' },
  { to: '/appointments', icon: <Appointments />, label: 'Appointments' },
  { to: '/explore', icon: <Explore />, label: 'Explore' },
  { to: '/profile', icon: <Profile />, label: 'Profile' },
];

export const Sidebar = ({
  isOpen,
  selectedItem,
  setSelectedItem,
}: SidebarProps) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {sidebarItems.map(({ to, icon, label }) => (
        <Link
          key={to}
          to={to}
          onClick={() => setSelectedItem(label)}
          className={selectedItem === label ? 'selected' : ''}
        >
          {icon}
          {label}
        </Link>
      ))}
    </div>
  );
};
