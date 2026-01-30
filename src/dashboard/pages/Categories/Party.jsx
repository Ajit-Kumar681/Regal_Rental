import React from "react";
import { useLocation } from "react-router-dom";
import partyImg1 from "../../../assets/images/img4.jpg";
import partyImg2 from "../../../assets/images/img5.jpg";
import partyImg3 from "../../../assets/images/img6.jpg";

const Party = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const minPrice = query.get("min") ? parseInt(query.get("min")) : 0;
  const maxPrice = query.get("max") ? parseInt(query.get("max")) : Infinity;

  const products = [
    { id: 1, title: "Party Dresses", desc: "Stylish party wear", price: 12000, img: partyImg1 },
    { id: 2, title: "Party Suits", desc: "Elegant suits & tuxedos", price: 15000, img: partyImg2 },
    { id: 3, title: "Accessories", desc: "Bags, jewelry, shoes", price: 3000, img: partyImg3 },
  ];

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div className="category-page">
      <h1 className="category-title">Party Collection</h1>
      <p className="category-subtitle">Trendy outfits for parties & events</p>

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

export default Party;

