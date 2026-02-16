import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#FFFEF9" }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6">
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                color: "#111827",
                marginBottom: "24px",
                lineHeight: "1.2",
              }}
            >
              Public Health <br /> AI Chatbot
            </h1>

            <p
              style={{
                fontSize: "16px",
                color: "#4B5563",
                maxWidth: "520px",
                lineHeight: "1.7",
                marginBottom: "32px",
              }}
            >
              Get instant, reliable information about diseases, symptoms,
              prevention methods, and general health awareness using our
              AI-powered healthcare assistant.
            </p>

            <Link to="/chat">
              <button
                className="btn btn-dark rounded-pill px-4 py-2"
                style={{ fontSize: "15px" }}
              >
                Start Chat
              </button>
            </Link>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="col-md-6 text-center">
            <img
              src="/doctor-illustration.png"
              alt="Healthcare AI Illustration"
              style={{
                maxWidth: "420px",
                width: "100%",
              }}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
