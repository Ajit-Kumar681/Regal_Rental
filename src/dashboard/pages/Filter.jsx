import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaList, FaDollarSign, FaWarehouse } from "react-icons/fa";

const Filter = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    if (!filters.category) {
      alert("Please select a category");
      return;
    }

    navigate(
      `dashboard/pages/category/${filters.category.toLowerCase()}?min=${filters.minPrice}&max=${filters.maxPrice}&stock=${filters.stock}`
    );
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      stock: "",
    });
  };

  return (
    /* ✅ THIS WRAPPER FIXES SIDEBAR + HEADER ISSUE */
    <div className="page-wrapper">
      <div className="filter-page">
        <div className="filter-card">
          <h2 className="filter-title">Refine Products</h2>
          <p className="filter-subtitle">
            Filter products by category, price, and stock
          </p>

          {/* Category */}
          <div className="filter-group">
            <label><FaList /> Category</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Wedding">Wedding</option>
              <option value="Party">Party</option>
              <option value="Casual">Casual</option>
              <option value="Regular">Regular</option>
            </select>
          </div>

          {/* Price */}
          <div className="filter-group">
            <label><FaDollarSign /> Price Range (₹)</label>
            <div className="price-box">
              <input
                type="number"
                name="minPrice"
                placeholder="Min"
                value={filters.minPrice}
                onChange={handleChange}
              />
              <input
                type="number"
                name="maxPrice"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Stock */}
          <div className="filter-group">
            <label><FaWarehouse /> Stock Status</label>
            <select
              name="stock"
              value={filters.stock}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="Available">Available</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="filter-actions">
            <button className="btn-reset" onClick={resetFilters}>
              Reset
            </button>
            <button className="btn-apply" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
