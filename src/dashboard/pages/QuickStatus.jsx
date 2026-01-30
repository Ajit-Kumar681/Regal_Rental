import { useState } from "react";

const QuickStatus = () => {
  const emptyForm = {
    name: "",
    logo: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
    package: "",
    categories: [],
  };

  const [form, setForm] = useState(emptyForm);
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const categoryList = ["Retail", "Wholesale", "Premium", "Enterprise"];

  // INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // LOGO UPLOAD
  const handleLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, logo: URL.createObjectURL(file) });
    }
  };

  // CATEGORY TOGGLE
  const toggleCategory = (cat) => {
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter((c) => c !== cat)
        : [...prev.categories, cat],
    }));
  };

  // SAVE / UPDATE
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.mobile) {
      alert("Name, Email & Mobile are required");
      return;
    }

    if (editIndex !== null) {
      const updated = [...list];
      updated[editIndex] = form;
      setList(updated);
      setEditIndex(null);
    } else {
      setList([...list, form]);
    }

    setForm(emptyForm);
  };

  // EDIT
  const handleEdit = (index) => {
    setForm(list[index]);
    setEditIndex(index);
  };

  // DELETE
  const handleDelete = (index) => {
    if (window.confirm("Delete this record?")) {
      setList(list.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="page">
      <h1>Add Store</h1>

      {/* FORM */}
      <div className="qs-card">
        <h3>Account Information</h3>

        <div className="form-grid">
          <div className="field">
            <label>Name *</label>
            <input name="name" value={form.name} onChange={handleChange} />
          </div>

          <div className="field">
            <label>Email *</label>
            <input name="email" value={form.email} onChange={handleChange} />
          </div>

          <div className="field">
            <label>Mobile *</label>
            <input name="mobile" value={form.mobile} onChange={handleChange} />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} />
          </div>
        </div>


        <div className="form-grid">
          <div className="field">
            <label>Address</label>
            <input name="address" value={form.address} onChange={handleChange} />
          </div>

          <div className="field">
            <label>Package</label>
            <select name="package" value={form.package} onChange={handleChange}>
              <option value="">Select Package</option>
              <option value="Basic">Basic</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Categories</label>
          <div className="chip-box">
            {categoryList.map((cat) => (
              <span
                key={cat}
                className={form.categories.includes(cat) ? "chip active" : "chip"}
                onClick={() => toggleCategory(cat)}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="field">
          <label>Logo</label>
          <input type="file" onChange={handleLogo} />
        </div>

        <div className="actions">
          <button className="primary" onClick={handleSubmit}>
            {editIndex !== null ? "Update" : "Create"}
          </button>
          <button className="ghost" onClick={() => setForm(emptyForm)}>
            Clear
          </button>
        </div>
      </div>

      {/* OUTPUT */}
      <div className="profile-grid">
        {list.map((u, i) => (
          <div className="profile-card" key={i}>
            <div className="profile-header">
              <img src={u.logo || "https://via.placeholder.com/80"} alt="logo" />
              <div>
                <h3>{u.name}</h3>
                <span className="pkg">{u.package || "No Package"}</span>
              </div>
            </div>

            <div className="profile-body">
              <p><b>Mobile No:</b> {u.mobile}</p>
              <p><b>Email:</b> {u.email}</p>
              <p><b>Address:</b> {u.address || "-"}</p>

              <div className="cat-row">
                {u.categories.map((c, idx) => (
                  <span key={idx} className="cat-chip">{c}</span>
                ))}
              </div>
            </div>

            <div className="profile-actions">
              <button className="edit" onClick={() => handleEdit(i)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(i)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStatus;
