const Topbar = () => (
  <header className="topbar">
    <div>
      <p className="topbar__kicker">Welcome back, Admin</p>
      <h1 className="topbar__title">Manage your learning ecosystem</h1>
    </div>
    <div className="topbar__actions">
      <button type="button" className="button button--ghost">
        Download Report
      </button>
      <button type="button" className="button button--primary">
        Create Course
      </button>
      <div className="topbar__avatar">AD</div>
    </div>
  </header>
);

export default Topbar;
