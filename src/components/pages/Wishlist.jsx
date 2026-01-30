  import React from "react";
import { useNavigate } from "react-router-dom";


const Wishlist = ({ wishlistItems = [], removeFromWishlist, addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <h1>
          My Wishlist <span>❤️</span>
        </h1>
        <span className="wishlist-count">{wishlistItems.length}</span>
      </div>

      {wishlistItems.length === 0 ? (
        <p className="wishlist-empty">Your wishlist is empty</p>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <button
                className="wishlist-remove"
                onClick={() => removeFromWishlist(item.id)}
              >
                ✕
              </button>

              <img src={item.image} alt={item.title} />

              <div className="wishlist-info">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>

              <div className="wishlist-actions">
                <button
                  className="btn-buy"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>

                <button
                  className="btn-view"
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

export default Wishlist;
