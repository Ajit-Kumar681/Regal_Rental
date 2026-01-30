const inventoryItems = [
  {
    title: "Products",
    desc: "Manage all inventory products",
    icon: "📦",
  },
  {
    title: "Import",
    desc: "Import inventory data",
    icon: "⬇️",
  },
  {
    title: "Items",
    desc: "View and manage items",
    icon: "🧾",
  },
  {
    title: "Stock Management",
    desc: "Control stock in and out",
    icon: "📊",
  },
  {
    title: "Stock",
    desc: "Check current stock levels",
    icon: "🏬",
  },
];

const InventoryModule = () => {
  return (
    <div className="page inventory-page">
      <h1>Inventory Module</h1>
      <p className="subtitle">
        Track stock, availability, and inventory movement
      </p>

      <div className="inventory-grid">
        {inventoryItems.map((item, index) => (
          <div className="inventory-card" key={index}>
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

export default InventoryModule;
