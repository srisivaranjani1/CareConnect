import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from "./pages/ChatBot";
import Awareness from "./pages/Awareness";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DietPlan from "./pages/DietPlan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default: redirect to signup */}
        <Route path="/" element={<Navigate to="/signup" />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main App Routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/about" element={<About />} />
        <Route path="/diet" element={<DietPlan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;