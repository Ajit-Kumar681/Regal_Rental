import { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "#OR1023",
      customer: "Rahul Sharma",
      product: "Men Sherwani",
      duration: "25/01/2026 - 28/01/2026",
      amount: 2500,
      status: "Active",
    },
    {
      id: "#OR1024",
      customer: "Anjali Verma",
      product: "Women Lehenga",
      duration: "27/01/2026 - 02/02/2026",
      amount: 4200,
      status: "Pending",
    },
    {
      id: "#OR1025",
      customer: "Amit Kumar",
      product: "Kids Kurta",
      duration: "27/01/2026 - 29/01/2026",
      amount: 1200,
      status: "Completed",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  // Dynamic row class
  const getRowClass = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "row-active";
      case "pending":
        return "row-pending";
      case "completed":
        return "row-completed";
      case "inactive":
        return "row-inactive";
      default:
        return "";
    }
  };

  return (
    <div className="orders-page">
      <h1 className="page-title">Orders</h1>

      <div className="orders-card">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Duration</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className={getRowClass(order.status)}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.duration}</td>
                <td>₹{order.amount}</td>
                <td>
                  <select
                    value={order.status}
                    onChange={(e) =>
                      handleStatusChange(order.id, e.target.value)
                    }
                  >
                    <option>Active</option>
                    <option>Pending</option>
                    <option>Completed</option>
                    <option>Inactive</option>
                  </select>
                </td>
                <td>
                  <button className="btn view">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
