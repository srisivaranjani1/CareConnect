import React from "react";
import DiseaseInfoCard from "../components/DiseaseInfoCard";

function Awareness() {
  const diseases = [
    {
      name: "Dengue",
      symptoms: "Fever, headache, joint pain",
      prevention: "Avoid mosquito bites",
    },
    {
      name: "Diabetes",
      symptoms: "High sugar, thirst, fatigue",
      prevention: "Healthy diet, exercise",
    },
  ];

  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#FFFEF9", minHeight: "100vh" }}
    >
      <div className="container">

        {/* PAGE HEADING */}
        <div className="text-center mb-5">
          <h1
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#111827",
              marginBottom: "16px",
            }}
          >
            Disease Awareness
          </h1>

          <p
            style={{
              color: "#4B5563",
              fontSize: "16px",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
            }}
          >
            Learn about common diseases, their symptoms, and prevention methods.
            Early awareness helps reduce risks and promotes healthier living.
          </p>
        </div>

        {/* DISEASE CARDS */}
        <div
          className="mx-auto d-flex flex-column gap-4"
          style={{ maxWidth: "720px" }}
        >
          {diseases.map((d, i) => (
            <DiseaseInfoCard key={i} disease={d} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Awareness;
