import React from "react";
import { useLocation } from "react-router-dom";
import casualImg1 from "../../../assets/images/img8.jpg";
import casualImg2 from "../../../assets/images/img9.jpg";
import casualImg3 from "../../../assets/images/img10.jpg";

const Casual = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const minPrice = query.get("min") ? parseInt(query.get("min")) : 0;
  const maxPrice = query.get("max") ? parseInt(query.get("max")) : Infinity;

  const products = [
    { id: 1, title: "Casual Tops", desc: "Comfortable casual tops", price: 2000, img: casualImg1 },
    { id: 2, title: "Casual Pants", desc: "Trendy pants & jeans", price: 2500, img: casualImg2 },
    { id: 3, title: "Accessories", desc: "Belts, hats, shoes", price: 800, img: casualImg3 },
  ];

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div className="category-page">
      <h1 className="category-title">Casual Collection</h1>
      <p className="category-subtitle">Everyday casual wear for comfort & style</p>

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

export default Casual;
