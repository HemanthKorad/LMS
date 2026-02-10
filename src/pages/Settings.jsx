const Settings = () => (
  <div className="page">
    <header className="section-header section-header--stack">
      <div>
        <h2>Platform settings</h2>
        <p className="muted">
          Configure your academy, notifications, and integrations.
        </p>
      </div>
      <button type="button" className="button button--primary">
        Save changes
      </button>
    </header>
    <section className="settings-grid">
      <div className="detail-card">
        <h3>Academy profile</h3>
        <div className="form-grid">
          <label>
            Academy name
            <input type="text" defaultValue="Aidea Academy" />
          </label>
          <label>
            Admin email
            <input type="email" defaultValue="admin@aideaacademy.com" />
          </label>
          <label>
            Time zone
            <select defaultValue="Africa/Lagos">
              <option>Africa/Lagos</option>
              <option>Europe/London</option>
              <option>America/New_York</option>
            </select>
          </label>
        </div>
      </div>
      <div className="detail-card">
        <h3>Notifications</h3>
        <div className="toggle-list">
          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span>Email weekly digest</span>
          </label>
          <label className="toggle">
            <input type="checkbox" defaultChecked />
            <span>SMS for live session reminders</span>
          </label>
          <label className="toggle">
            <input type="checkbox" />
            <span>Auto-enroll new hires</span>
          </label>
        </div>
      </div>
      <div className="detail-card">
        <h3>Integrations</h3>
        <ul className="integration-list">
          <li>
            <span>Zoom</span>
            <button type="button" className="button button--ghost">
              Connected
            </button>
          </li>
          <li>
            <span>Slack</span>
            <button type="button" className="button button--ghost">
              Connect
            </button>
          </li>
          <li>
            <span>Stripe</span>
            <button type="button" className="button button--ghost">
              Connect
            </button>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

export default Settings;
