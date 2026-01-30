const Settings = () => {
  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>
      <p className="settings-subtitle">
        Manage company, system, and user configuration
      </p>

      <div className="settings-grid">

        <div className="settings-card">
          <h3>🏢 Company Profile</h3>
          <p>Manage company details and branding</p>
          <button className="settings-btn">Open</button>
        </div>

        <div className="settings-card">
          <h3>🧾 Invoice</h3>
          <p>Invoice format, numbering, and terms</p>
          <button className="settings-btn">Configure</button>
        </div>

        <div className="settings-card">
          <h3>💸 Tax</h3>
          <p>GST, VAT, and tax configuration</p>
          <button className="settings-btn">Manage</button>
        </div>

        <div className="settings-card">
          <h3>🛂 User Permission</h3>
          <p>Roles, permissions, and access control</p>
          <button className="settings-btn">Set Access</button>
        </div>

        <div className="settings-card">
          <h3>🎨 Theme</h3>
          <p>Change application theme & appearance</p>
          <button className="settings-btn">Customize</button>
        </div>

        <div className="settings-card danger-card">
          <h3>💾 Backup & Restore</h3>
          <p>Backup data or restore system</p>
          <button className="settings-btn danger">Proceed</button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
