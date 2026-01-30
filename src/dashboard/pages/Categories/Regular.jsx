import React from "react";
import { useLocation } from "react-router-dom";
import regularImg1 from "../../../assets/images/img10.jpg";
import regularImg2 from "../../../assets/images/img4.jpg";
import regularImg3 from "../../../assets/images/img7.jpg";

const Regular = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const minPrice = query.get("min") ? parseInt(query.get("min")) : 0;
  const maxPrice = query.get("max") ? parseInt(query.get("max")) : Infinity;

  const products = [
    { id: 1, title: "Regular Shirts", desc: "Daily wear shirts", price: 1500, img: regularImg1 },
    { id: 2, title: "Regular Pants", desc: "Comfortable trousers", price: 1800, img: regularImg2 },
    { id: 3, title: "Accessories", desc: "Caps, watches, shoes", price: 700, img: regularImg3 },
  ];

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div className="category-page">
      <h1 className="category-title">Regular Collection</h1>
      <p className="category-subtitle">Everyday wear for comfort & style</p>

      <div className="category-content">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.img} alt={product.title} />

                <div className="product-icons">
                  <span className="wishlist" title="Add to Wishlist">❤️</span>
                  <span className="cart" title="Add to Cart">🛒</span>
                </div>

                <div className="overlay-buttons">
                  <button className="btn-view">View</button>
                  <button className="btn-buy">Buy</button>
                </div>
              </div>

              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <p className="product-price">₹ {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#f87171" }}>No products found in this price range.</p>
        )}
      </div>
    </div>
  );
};

export default Regular;
