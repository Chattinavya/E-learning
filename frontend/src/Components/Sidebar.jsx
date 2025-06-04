import { NavLink } from 'react-router-dom';
import './Sidebar.css';


import {
  LayoutDashboard,
  BookOpenText,
  HelpCircle,
  Video,
  FileText,
  PencilRuler,
  ListChecks
} from 'lucide-react';

const navItems = [
  { to: '/courses', label: 'Dashboard', icon: <LayoutDashboard size={18} />, title: 'Go to Dashboard' },
  { to: '/dashboard', label: 'Courses', icon: <BookOpenText size={18} />, title: 'Browse Courses' },
  { to: '/editor', label: 'Editor', icon: <PencilRuler size={18} />, title: 'Practice with Editor' },
  { to: '/interview', label: 'Interview Questions', icon: <HelpCircle size={18} />, title: 'Prepare for Interviews' },
  { to: '/videos', label: 'Videos', icon: <Video size={18} />, title: 'Watch Learning Videos' },
  { to: '/pdfs', label: 'PDFs', icon: <FileText size={18} />, title: 'Read PDFs' },
  { to: '/quiz', label: 'Quiz', icon: <ListChecks size={18} />, title: 'Test your skills' } 
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Toggle Button is always visible, fixed on screen left */}
      <button
        className={`sidebar-toggle-btn fixed-toggle-btn ${isOpen ? 'open' : 'closed'}`}
        onClick={toggleSidebar}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        type="button"
      >
        {isOpen ? '☰' : '☰'}
      </button>

      {/* Sidebar: visible only when open */}
      <aside
        className={`sidebar ${isOpen ? 'open' : 'closed'}`}
        aria-label="Primary Sidebar Navigation"
      >
        <nav className="sidebar-nav" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            {navItems.map(({ to, label, icon, title }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  title={title}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    if (window.innerWidth < 768) toggleSidebar();
                  }}
                >
                  <span className="nav-icon">{icon}</span>
                  <span className="nav-label">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
