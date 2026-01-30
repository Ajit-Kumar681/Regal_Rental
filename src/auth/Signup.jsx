import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // install react-icons
import Logo from "../assets/images/logo.png";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    role: "customer",
    adminEmail: "admin@example.com",
    sellerEmail: "seller@example.com",
    customerEmail: "customer@example.com",
    password: "",
    confirmPassword: "",
  });

  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Generate user ID
  const generateID = (role) => {
    const prefix = role.charAt(0).toUpperCase(); // A / S / C
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}${randomNum}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = "";
    if (form.role === "admin") email = form.adminEmail;
    else if (form.role === "seller") email = form.sellerEmail;
    else email = form.customerEmail;

    if (form.password !== form.confirmPassword) {
      setMsg("❌ Passwords do not match");
      return;
    }

    const userID = generateID(form.role);

    const newUser = {
      id: userID,
      name: form.name,
      email,
      password: form.password,
      role: form.role,
    };

    console.log("New user:", newUser);

    setMsg(
      `🎉 ${form.role.charAt(0).toUpperCase() + form.role.slice(1)} Signup Successful. Your ID: ${userID}`
    );

    setTimeout(() => navigate("/auth/login"), 2000);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-logo">
          <img src={Logo} alt="Logo" />
        </div>

        <h3>Create a New Account</h3>
        {msg && <p className="msg">{msg}</p>}

        <form onSubmit={handleSubmit}>
          {/* Role selection */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
            <option value="customer">Customer</option>
          </select>

          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          {/* Role-specific email fields */}
          {form.role === "admin" && (
            <input
              type="email"
              name="adminEmail"
              placeholder="Admin Email"
              value={form.adminEmail}
              onChange={handleChange}
              required
            />
          )}
          {form.role === "seller" && (
            <input
              type="email"
              name="sellerEmail"
              placeholder="Seller Email"
              value={form.sellerEmail}
              onChange={handleChange}
              required
            />
          )}
          {form.role === "customer" && (
            <input
              type="email"
              name="customerEmail"
              placeholder="Customer Email"
              value={form.customerEmail}
              onChange={handleChange}
              required
            />
          )}

          {/* Password with eye icon */}
          <div style={{ position: "relative" }}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div style={{ position: "relative" }}>
            <input
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
