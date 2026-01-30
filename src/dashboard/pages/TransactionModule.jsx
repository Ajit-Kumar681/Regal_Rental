const transactionItems = [
  {
    title: "Booking",
    desc: "Manage rental bookings",
    icon: "📅",
  },
  {
    title: "Holds Bill",
    desc: "View hold and pending bills",
    icon: "🧾",
  },
  {
    title: "Income",
    desc: "Track all income transactions",
    icon: "💵",
  },
  {
    title: "Expense",
    desc: "Manage business expenses",
    icon: "💸",
  },
  {
    title: "Sales",
    desc: "View sales transactions",
    icon: "📈",
  },
  {
    title: "Purchase",
    desc: "Manage purchase records",
    icon: "🛒",
  },
];

const TransactionModule = () => {
  return (
    <div className="page transaction-page">
      <h1>Transaction Module</h1>
      <p className="subtitle">
        View and manage all rental and payment transactions
      </p>

      <div className="transaction-grid">
        {transactionItems.map((item, index) => (
          <div className="transaction-card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="manage-btn">Manage</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionModule;
