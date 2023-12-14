import { CiMenuBurger, CiMenuKebab } from "react-icons/ci";
import { Navigation } from 'components/Navigation/Navigation'
import './Sidebar.scss';
import { Employee } from 'components/Employee/Employee';
import { useState } from 'react';

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='sidebar-wrapper'>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen && <CiMenuBurger className="sidebar-open" id="btn" />}
        {!isSidebarOpen && <CiMenuKebab className="sidebar-close" id="cancel" />}
      </button>
      <div className={`sidebar ${isSidebarOpen ? ' show-menu' : ''}`}>
        <Navigation />
        <Employee />
      </div>
    </div>
  );
};