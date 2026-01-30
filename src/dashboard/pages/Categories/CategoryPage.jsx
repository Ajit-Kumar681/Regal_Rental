import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import "./CategoryPage.css";

import bridalImg from "../../../assets/images/img1.jpg";
import groomImg from "../../../assets/images/img2.jpg";
import accessoryImg from "../../../assets/images/img3.jpg";

const allProducts = {
  wedding: [
    { id: 1, title: "Bridal Wear", price: 25000, img: bridalImg, stock: "Available" },
    { id: 2, title: "Groom Wear", price: 20000, img: groomImg, stock: "Low Stock" },
    { id: 3, title: "Accessories", price: 5000, img: accessoryImg, stock: "Available" },
  ],
  party: [
    { id: 4, title: "Party Dress", price: 15000, img: bridalImg, stock: "Available" },
    { id: 5, title: "Party Suit", price: 18000, img: groomImg, stock: "Out of Stock" },
  ],
  casual: [
    { id: 6, title: "Casual Shirt", price: 5000, img: bridalImg, stock: "Available" },
    { id: 7, title: "Casual Pants", price: 4000, img: groomImg, stock: "Low Stock" },
  ],
  regular: [
    { id: 8, title: "Regular Kurta", price: 3000, img: bridalImg, stock: "Available" },
    { id: 9, title: "Regular Saree", price: 3500, img: groomImg, stock: "Out of Stock" },
  ],
};

const CategoryPage = ({ addToWishlist, addToCart }) => {
  const { name } = useParams();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const minPrice = query.get("min") ? Number(query.get("min")) : 0;
  const maxPrice = query.get("max") ? Number(query.get("max")) : Infinity;
  const stockFilter = query.get("stock") || "";

  const products = allProducts[name] || [];

  const filteredProducts = products.filter(
    (p) =>
      p.price >= minPrice &&
      p.price <= maxPrice &&
      (stockFilter ? p.stock === stockFilter : true)
  );

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{name?.toUpperCase()} COLLECTION</h1>
        <p>{filteredProducts.length} Products Found</p>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="no-product">No products found for selected filters.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.title} />

              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="price">₹ {product.price.toLocaleString()}</p>
                <span className={`stock ${product.stock.replace(" ", "-").toLowerCase()}`}>
                  {product.stock}
                </span>
              </div>

              <div className="product-actions">
                <button className="wishlist-btn" onClick={() => addToWishlist(product)}>
                  ❤️ Wishlist
                </button>
                <button className="cart-btn" onClick={() => addToCart(product)}>
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
