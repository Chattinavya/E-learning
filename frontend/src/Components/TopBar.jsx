import './styles/TopBar.css';

export default function TopBar({ toggleSidebar }) {
  return (
    <header className="topbar">
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <h1 className="topbar-logo">
                Skill<span className="logo-highlight">Sync</span>
      </h1>
    </header>
  );
}
