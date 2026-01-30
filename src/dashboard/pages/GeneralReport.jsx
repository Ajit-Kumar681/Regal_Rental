const reportItems = [
  {
    title: "Delivery",
    desc: "View delivered orders report",
    icon: "🚚",
  },
  {
    title: "Return",
    desc: "Returned items and orders",
    icon: "↩️",
  },
  {
    title: "Deposit",
    desc: "Security deposit records",
    icon: "🏦",
  },
  {
    title: "Accessory",
    desc: "Accessory usage and history",
    icon: "🎒",
  },
  {
    title: "Product History",
    desc: "Complete product movement history",
    icon: "📜",
  },
  {
    title: "Booked Orders",
    desc: "All booked orders report",
    icon: "📦",
  },
  {
    title: "Stock Register",
    desc: "Stock in/out register report",
    icon: "📘",
  },
  {
    title: "SalesMan",
    desc: "Salesman performance and sales report",
    icon: "🧑‍💼",
  },
];

const GeneralReport = () => {
  return (
    <div className="page general-report-page">
      <h1>General Report</h1>
      <p className="subtitle">
        Overall system reports and performance insights
      </p>

      <div className="report-grid">
        {reportItems.map((item, index) => (
          <div className="report-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="view-btn">View Report</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralReport;
