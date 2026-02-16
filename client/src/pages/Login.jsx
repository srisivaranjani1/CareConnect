

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css"; // ✅ import css

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", form);
      localStorage.setItem("token", res.data.token);
      alert(res.data.message);
      navigate("/home");
    } catch (err) {
      if (err.response && err.response.data.message === "Invalid credentials") {
        alert("User not registered. Redirecting to Signup...");
        navigate("/signup");
      } else {
        alert("Login failed");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} type="email" required />
        <input name="password" placeholder="Password" onChange={handleChange} type="password" required />
        <button type="submit">Login</button>
      </form>
      <div className="footer">
        Don't have an account? <span onClick={() => navigate("/signup")}>Signup</span>
      </div>
    </div>
  );
}