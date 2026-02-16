import React from "react";

function About() {
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
              AI Voice Agents <br /> for Healthcare
            </h1>

            <p
              style={{
                fontSize: "16px",
                color: "#4B5563",
                maxWidth: "520px",
                lineHeight: "1.7",
              }}
            >
              Our AI-powered healthcare assistant is designed to improve
              disease awareness and public health education. It helps users
              understand symptoms, prevention methods, and general health
              guidance through natural conversations.
              <br />
              <br />
              The system ensures responsible AI usage, prioritizing data
              privacy, accuracy, and accessibility while supporting better
              healthcare decision-making.
            </p>
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

export default About;
