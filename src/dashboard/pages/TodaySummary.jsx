import { useState } from "react";

const TodaySummary = () => {
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    sellerName: "",
    productName: "",
    productImage: "",
  });

  // HANDLE TEXT INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // HANDLE IMAGE
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({
        ...form,
        productImage: URL.createObjectURL(file),
      });
    }
  };

  // SAVE DATA
  const handleSave = () => {
    if (!form.sellerName || !form.productName || !form.productImage) {
      alert("Seller name, Product name and Image are required");
      return;
    }

    setItems([
      ...items,
      {
        sellerName: form.sellerName,
        productName: form.productName,
        productImage: form.productImage,
        addedAt: new Date().toLocaleDateString(),
      },
    ]);

    setForm({
      sellerName: "",
      productName: "",
      productImage: "",
    });
  };

  return (
    <div className="page today-summary">
      <h1 className="page-title">Category</h1>
      <p className="subtitle">Seller wise product overview</p>

      {/* ================= FORM ================= */}
      <div className="card form-card">
        <h2>Add Product</h2>

        <div className="form-group">
          <label>Seller Name *</label>
          <input
            type="text"
            name="sellerName"
            placeholder="Enter seller name"
            value={form.sellerName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="productName"
            placeholder="Enter product name"
            value={form.productName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Product Image *</label>
          <input type="file" accept="image/*" onChange={handleImage} />
        </div>

        {form.productImage && (
          <div className="image-preview">
            <img src={form.productImage} alt="Preview" />
          </div>
        )}

        <button className="save-btn" onClick={handleSave}>
          Save Product
        </button>
      </div>

      {/* ================= OUTPUT ================= */}
      <div className="product-grid">
        {items.length === 0 ? (
          <p className="empty-text">No products added today</p>
        ) : (
          items.map((item, index) => (
            <div className="product-card" key={index}>
              <img src={item.productImage} alt={item.productName} />

              <div className="product-info">
                <h3>{item.productName}</h3>
                <p className="seller-name">
                  Seller: <b>{item.sellerName}</b>
                </p>
                <span className="date">Added: {item.addedAt}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodaySummary;
