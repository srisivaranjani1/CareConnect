

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css"; // ✅ import css

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/signup", form);
      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data.message === "User already exists") {
        alert("User already exists. Redirecting to Login...");
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} type="email" required />
        <input name="password" placeholder="Password" onChange={handleChange} type="password" required />
        <button type="submit">Signup</button>
      </form>
      <div className="footer">
        Already have an account? <span onClick={() => navigate("/login")}>Login</span>
      </div>
    </div>
  );
}