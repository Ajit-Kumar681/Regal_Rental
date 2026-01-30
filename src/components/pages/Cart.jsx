import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems = [], removeFromCart }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>
          My Cart <span>🛒</span>
        </h1>
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          🛍️ Cart is empty <br />
          <small>Add items to your cart</small>
        </div>
      ) : (
        <div className="cart-grid">
          {cartItems.map((item) => (
            <div className="cart-card" key={item.id}>
              <button
                className="cart-remove"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>

              <img src={item.image} alt={item.title} />

              <div className="cart-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>

              <div className="cart-overlay">
                <button className="cart-buy">Buy Now</button>
                <button
                  className="cart-view"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
