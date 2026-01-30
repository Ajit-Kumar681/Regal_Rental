import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="header-left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <form className="header-search">
        <input
          type="text"
          placeholder="Search premium outfits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>

      <nav className="header-right">
        <Link to="/">Home</Link>
        <Link to="/wishlist" className="icon-btn" title="Wishlist">❤️</Link>
        <Link to="/cart" className="icon-btn" title="Cart">🛒</Link>
        <Link to="/auth/login" className="btn login-btn">Login</Link>
        <Link to="/auth/signup" className="btn signup-btn">Sign Up</Link>
      </nav>
    </header>
  );
};

export default Header;
