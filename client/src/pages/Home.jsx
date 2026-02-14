import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <h1>Public Health AI Chatbot</h1>
      <p>Ask about diseases, symptoms and prevention.</p>

      <Link to="/chat">
        <button>Start Chat</button>
      </Link>
    </div>
  );
}

export default Home;
