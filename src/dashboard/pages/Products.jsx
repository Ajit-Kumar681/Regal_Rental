import { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const emptyProduct = {
    name: "",
    description: "",
    category: "",
    pricePerDay: "",
    startDate: "",
    endDate: "",
    duration: 0,
    deposit: "",
    total: 0,
    image: "",
  };

  /* LOAD */
  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (stored) setProducts(JSON.parse(stored));
    setIsLoaded(true);
  }, []);

  /* SAVE */
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products, isLoaded]);

  /* DAYS */
  const calculateDays = (start, end) => {
    if (!start || !end) return 0;
    const diff =
      (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24);
    return diff >= 0 ? diff + 1 : 0;
  };

  /* AUTO TOTAL */
  useEffect(() => {
    if (!editingProduct) return;

    const days = calculateDays(
      editingProduct.startDate,
      editingProduct.endDate
    );
    const rent = Number(editingProduct.pricePerDay || 0) * days;
    const total = Math.max(0, rent - Number(editingProduct.deposit || 0));

    setEditingProduct((p) => ({
      ...p,
      duration: days,
      total,
    }));
  }, [
    editingProduct?.pricePerDay,
    editingProduct?.startDate,
    editingProduct?.endDate,
    editingProduct?.deposit,
  ]);

  /* ACTIONS */
  const handleAdd = () => {
    setEditingProduct(emptyProduct);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (editingProduct.id) {
      setProducts(products.map(p => p.id === editingProduct.id ? editingProduct : p));
    } else {
      setProducts([...products, { ...editingProduct, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete product?")) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>Products</h1>
        <button className="btn-primary" onClick={handleAdd}>+ Add Product</button>
      </div>

      <div className="products-card">
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Details</th>
              <th>₹ / Day</th>
              <th>Days</th>
              <th>Deposit</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>
                  {p.image && <img src={p.image} className="product-thumb" />}
                </td>

                <td>
                  <b>{p.name}</b>
                  <p className="product-desc">{p.description}</p>
                </td>

                <td>₹{p.pricePerDay}</td>
                <td>{p.duration}</td>
                <td className="deposit-text">₹{p.deposit || 0}</td>
                <td><b>₹{p.total}</b></td>

                <td>
                  <button className="btn-link" onClick={() => {
                    setEditingProduct(p);
                    setModalOpen(true);
                  }}>Edit</button>

                  <button
                    className="btn-link danger"
                    onClick={() => handleDelete(p.id)}
                  >Delete</button>
                </td>
              </tr>
            ))}

            {products.length === 0 && (
              <tr>
                <td colSpan="7" align="center">No products added</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{editingProduct.id ? "Edit Product" : "Add Product"}</h3>

            <input
              placeholder="Product Name"
              value={editingProduct.name}
              onChange={e => setEditingProduct({ ...editingProduct, name: e.target.value })}
            />

            <textarea
              placeholder="Product Description"
              value={editingProduct.description}
              onChange={e => setEditingProduct({ ...editingProduct, description: e.target.value })}
            />

            <input
              placeholder="Image URL"
              value={editingProduct.image}
              onChange={e => setEditingProduct({ ...editingProduct, image: e.target.value })}
            />

            <input
              type="number"
              placeholder="Price per Day"
              value={editingProduct.pricePerDay}
              onChange={e => setEditingProduct({ ...editingProduct, pricePerDay: e.target.value })}
            />

            <input
              type="date"
              value={editingProduct.startDate}
              onChange={e => setEditingProduct({ ...editingProduct, startDate: e.target.value })}
            />

            <input
              type="date"
              value={editingProduct.endDate}
              onChange={e => setEditingProduct({ ...editingProduct, endDate: e.target.value })}
            />

            <input
              type="number"
              placeholder="Security Deposit"
              value={editingProduct.deposit}
              onChange={e => setEditingProduct({ ...editingProduct, deposit: e.target.value })}
            />

            <div className="summary-box">
              <p>Duration: <b>{editingProduct.duration} days</b></p>
              <p>Deposit: ₹{editingProduct.deposit || 0}</p>
              <p className="grand-total">Payable: ₹{editingProduct.total}</p>
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setModalOpen(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
