const masterItems = [
  { title: "Category", desc: "Manage product categories", icon: "📂" },
  { title: "Brand", desc: "Manage brands", icon: "🏷️" },
  { title: "Unit", desc: "Manage units of measurement", icon: "📏" },
  { title: "Tax", desc: "Manage tax settings", icon: "💰" },
  { title: "Customer", desc: "Manage customers", icon: "👤" },
  { title: "Supplier", desc: "Manage suppliers", icon: "🚚" },
  { title: "User", desc: "Manage system users", icon: "🧑‍💼" },
];

const MasterModule = () => {
  return (
    <div className="page master-page">
      <h1>Master Module</h1>
      <p className="subtitle">
        Manage master data like categories, roles, and settings
      </p>

      <div className="master-grid">
        {masterItems.map((item, index) => (
          <div className="master-card" key={index}>
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

export default MasterModule;
