import { useState } from "react";

const DashboardHome = () => {
  const [form, setForm] = useState({
    packageName: "",
    days: "",
    price: "",
    description: "",
  });

  const [packages, setPackages] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (!form.packageName || !form.days || !form.price) {
      alert("Package Name, Days and Price are required");
      return;
    }

    if (editingIndex !== null) {
      const updated = [...packages];
      updated[editingIndex] = {
        ...form,
        disabled: updated[editingIndex].disabled,
        createdAt: updated[editingIndex].createdAt,
      };
      setPackages(updated);
      setEditingIndex(null);
    } else {
      setPackages([
        ...packages,
        {
          ...form,
          disabled: false,
          createdAt: new Date().toLocaleDateString(),
        },
      ]);
    }

    setForm({
      packageName: "",
      days: "",
      price: "",
      description: "",
    });
  };

  const handleEdit = (index) => {
    setForm({
      packageName: packages[index].packageName,
      days: packages[index].days,
      price: packages[index].price,
      description: packages[index].description,
    });
    setEditingIndex(index);
  };

  const toggleStatus = (index) => {
    const updated = [...packages];
    updated[index].disabled = !updated[index].disabled;
    setPackages(updated);
  };

  return (
    <div className="page subscription-page">
      <h1 className="page-title">📦 Package Management</h1>

      {/* ================= FORM ================= */}
      <div className="card form-card">
        <h2>{editingIndex !== null ? "Edit Package" : "Create Package"}</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>Package Name *</label>
            <input
              type="text"
              name="packageName"
              value={form.packageName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Validity (Days) *</label>
            <input
              type="number"
              name="days"
              value={form.days}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Price (₹) *</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full">
            <label>Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="save-btn" onClick={handleSave}>
          {editingIndex !== null ? "Update Package" : "Create Package"}
        </button>
      </div>

      {/* ================= OUTPUT TABLE ================= */}
      <div className="card table-card">
        <h2>Package List</h2>

        {packages.length === 0 ? (
          <p className="empty-text">No packages found</p>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>Package Name</th>
                <th>Days</th>
                <th>Price</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {packages.map((pkg, index) => (
                <tr key={index} className={pkg.disabled ? "row-disabled" : ""}>
                  <td>{pkg.packageName}</td>
                  <td>{pkg.days}</td>
                  <td>₹{pkg.price}</td>
                  <td>
                    <span
                      className={`badge ${
                        pkg.disabled ? "badge-red" : "badge-green"
                      }`}
                    >
                      {pkg.disabled ? "Inactive" : "Active"}
                    </span>
                  </td>
                  <td>{pkg.createdAt}</td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="status-btn"
                      onClick={() => toggleStatus(index)}
                    >
                      {pkg.disabled ? "Enable" : "Disable"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
