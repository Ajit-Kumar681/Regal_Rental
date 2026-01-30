const financeItems = [
  {
    title: "Pending Bills",
    desc: "View all unpaid and pending bills",
    icon: "⏳",
  },
  {
    title: "Income",
    desc: "Track total income records",
    icon: "💰",
  },
  {
    title: "Account Ledger",
    desc: "View account ledger entries",
    icon: "📒",
  },
  {
    title: "Profit - Loss",
    desc: "Analyze profit and loss statement",
    icon: "📉",
  },
  {
    title: "Balance Sheet",
    desc: "View balance sheet summary",
    icon: "📊",
  },
];

const FinanceReport = () => {
  return (
    <div className="page finance-report-page">
      <h1>Finance Report</h1>
      <p className="subtitle">
        Revenue, expenses, and financial analytics
      </p>

      <div className="finance-grid">
        {financeItems.map((item, index) => (
          <div className="finance-card" key={index}>
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

export default FinanceReport;
