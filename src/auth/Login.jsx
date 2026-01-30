import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [adminEmail, setAdminEmail] = useState("admin@example.com");
  const [sellerEmail, setSellerEmail] = useState("seller@example.com");
  const [customerEmail, setCustomerEmail] = useState("customer@example.com");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Determine which email to check
    let email = "";
    let correctPassword = "";
    let route = "";

    if (role === "admin") {
      email = adminEmail;
      correctPassword = "admin";
      route = "/dashboard";
    } else if (role === "seller") {
      email = sellerEmail;
      correctPassword = "seller";
      route = "/seller-dashboard";
    } else {
      email = customerEmail;
      correctPassword = "customer";
      route = "/customer-dashboard";
    }

    if (
      (role === "admin" && email === "admin@example.com" && password === correctPassword) ||
      (role === "seller" && email === "seller@example.com" && password === correctPassword) ||
      (role === "customer" && email === "customer@example.com" && password === correctPassword)
    ) {
      setMsg(`🎉 ${role.charAt(0).toUpperCase() + role.slice(1)} Login Successful`);
      setTimeout(() => navigate(route), 1000);
    } else {
      setMsg("❌ Invalid email or password for this role");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <h3>Login To Your Account</h3>
        {msg && <p className="msg">{msg}</p>}

        <form onSubmit={handleSubmit}>
          {/* Role selection */}
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>

          {/* Separate email fields */}
          {role === "admin" && (
            <input
              type="email"
              placeholder="Admin Email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
              required
            />
          )}
          {role === "seller" && (
            <input
              type="email"
              placeholder="Seller Email"
              value={sellerEmail}
              onChange={(e) => setSellerEmail(e.target.value)}
              required
            />
          )}
          {role === "customer" && (
            <input
              type="email"
              placeholder="Customer Email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
       
          Don't have an account?  <Link to="/auth/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
