const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Page Header */}
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Overview of your system</p>
      </div>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="stat-card">
          <span>Total Orders</span>
          <h2>1,248</h2>
        </div>

        <div className="stat-card">
          <span>Total Users</span>
          <h2>542</h2>
        </div>

        <div className="stat-card">
          <span>Active Rentals</span>
          <h2>87</h2>
        </div>

        <div className="stat-card">
          <span>Revenue</span>
          <h2>₹96,300</h2>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="dashboard-table-card">
        <h3>Recent Orders</h3>

        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#R1023</td>
              <td>Rahul</td>
              <td className="status success">Completed</td>
              <td>₹2,500</td>
            </tr>
            <tr>
              <td>#R1024</td>
              <td>Anjali</td>
              <td className="status pending">Pending</td>
              <td>₹1,800</td>
            </tr>
            <tr>
              <td>#R1025</td>
              <td>Amit</td>
              <td className="status cancelled">Cancelled</td>
              <td>₹900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
