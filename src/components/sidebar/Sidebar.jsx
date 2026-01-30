import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-section">

        <h2 className="logo-text">RentalRent</h2>

        {/* DASHBOARD */}
        <div
          className="sidebar-link"
          onClick={() => setOpenDashboard(!openDashboard)}
        >
          <span className="icon">🏠</span>
          <span>Dashboard</span>
        </div>

        {openDashboard && (
          <div className="submenu">
            <NavLink to="/dashboard"  className="sidebar-link">
              Dashboard Module
            </NavLink>

          


            <NavLink to="/dashboard/available-modules" className="sidebar-link">
              Available Module
            </NavLink>

            <NavLink to="/dashboard/catalogue-modules" className="sidebar-link">
              Catalogue Module
            </NavLink>
          </div>
        )}

        {/* MENU */}
        <div
          className="sidebar-link"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="icon">☰</span>
          <span>Menu</span>
        </div>

        {openMenu && (
          <div className="submenu">
            <NavLink to="/dashboard/master-module" className="sidebar-link">
              Master Module
            </NavLink>

            <NavLink to="/dashboard/inventory-module" className="sidebar-link">
              Inventory Module
            </NavLink>

            <NavLink to="/dashboard/transaction-module" className="sidebar-link">
              Transaction Module
            </NavLink>

            <NavLink to="/dashboard/general-report" className="sidebar-link">
              General Report
            </NavLink>

            <NavLink to="/dashboard/finance-report" className="sidebar-link">
              Finance Report
            </NavLink>
          </div>
        )}

        <Link to="/dashboard/orders" className="sidebar-link">
          <span className="icon">📦</span>
          <span>Orders</span>
        </Link>
        

        <NavLink to="/dashboard/products" className="sidebar-link">
          <span className="icon">👕</span>
          <span>Products</span>
        </NavLink>

        <NavLink to="/dashboard/Filter" className="sidebar-link">
  <span className="icon">🎛️</span>
  <span>Filter</span>
</NavLink>


        <NavLink to="/dashboard/Users" className="sidebar-link">
          <span className="icon">👤</span>
          <span>Users</span>
        </NavLink>
      </div>
      


      {/* SETTINGS */}
      <div className="sidebar-section">
        <p className="section-title">SETTINGS</p>

        <NavLink to="/dashboard/Profile" className="sidebar-link">
          <span className="icon">🧑‍💼</span>
          <span>Profile</span>
        </NavLink>

        

        <NavLink to="/dashboard/Seeting" className="sidebar-link">
          <span className="icon">⚙️</span>
          <span>Settings</span>
        </NavLink>
        

        <NavLink to="/dashboard/Logout" className="sidebar-link logout">
          <span className="icon">🚪</span>
          <span>Logout</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
