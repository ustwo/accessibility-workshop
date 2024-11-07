import { useState } from 'react';

import { Outlet } from '@remix-run/react';
import { LinksFunction } from '@remix-run/node';

import {
  AuthenticatedHeader,
  links as authenticatedHeaderLink,
} from '../components/AuthenticatedHeader';
import { Sidebar, links as sidebarLink } from '../components/Sidebar';

export const links: LinksFunction = () => {
  return [...authenticatedHeaderLink, ...sidebarLink];
};

export default function Auth() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState('Home');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <AuthenticatedHeader toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className={`dashboard-main ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}
