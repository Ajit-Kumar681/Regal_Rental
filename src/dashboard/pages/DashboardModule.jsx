import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const DashboardModule = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* Parent Toggle */}
      <div
        className="sidebar-link"
        onClick={() => setOpenMenu(!openMenu)}
      >
        Dashboard Module
      </div>

      {openMenu && (
        <div className="dashboard-card-grid">

          <Link to="/dashboard/dashboard-home" className="dash-card">
            <h1>Package</h1>
            <p>Main overview</p>
          </Link>

          <NavLink to="/dashboard/today-summary" className="dash-card">
            <h1>Category</h1>
            <p>Daily insights</p>
          </NavLink>

          <NavLink to="/dashboard/quick-status" className="dash-card">
            <h1>Store Add</h1>
            <p>Live status</p>
          </NavLink>

          {/* <NavLink to="/dashboard/recent-activities" className="dash-card">
            <h1>Recent Activities</h1>
            <p>Latest actions</p>
          </NavLink>

          <NavLink to="/dashboard/notifications" className="dash-card">
            <h1>Notifications</h1>
            <p>Alerts & updates</p>
          </NavLink> */}

        </div>
      )}
    </>
  );
};

export default DashboardModule;
