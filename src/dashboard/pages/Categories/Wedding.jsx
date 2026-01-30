import React from "react";
import { useLocation } from "react-router-dom";
import bridalImg from "../../../assets/images/img1.jpg";
import groomImg from "../../../assets/images/img2.jpg";
import accessoryImg from "../../../assets/images/img3.jpg";

const Wedding = ({ addToWishlist, addToCart }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const minPrice = query.get("min") ? parseInt(query.get("min")) : 0;
  const maxPrice = query.get("max") ? parseInt(query.get("max")) : Infinity;

  const products = [
    { id: 1, title: "Bridal Wear", desc: "Lehenga, gowns, designer sarees", price: 25000, img: bridalImg },
    { id: 2, title: "Groom Wear", desc: "Sherwani, suits, traditional wear", price: 20000, img: groomImg },
    { id: 3, title: "Accessories", desc: "Dupatta, jewelry, footwear", price: 5000, img: accessoryImg },
  ];

  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div className="category-page">
      <h1 className="category-title">Wedding Collection</h1>
      <p className="category-subtitle">
        Premium bridal & groom outfits for special occasions
      </p>

      <div className="category-content">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.img} alt={product.title} />

                {/* Wishlist & Cart */}
                <div className="product-icons">
                  <span
                    className="wishlist"
                    title="Add to Wishlist"
                    onClick={() => addToWishlist(product)}
                  >❤️</span>
                  <span
                    className="cart"
                    title="Add to Cart"
                    onClick={() => addToCart(product)}
                  >🛒</span>
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

export default Wedding;
