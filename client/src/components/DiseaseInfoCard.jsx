import React from "react";

function DiseaseInfoCard({ disease }) {
  return (
    <div
      className="p-4 rounded-4"
      style={{
        backgroundColor: "#F9FAFB",
        border: "1px solid #E5E7EB",
        maxWidth: "100%",
        fontSize: "14px",
        lineHeight: "1.6",
      }}
    >
      {/* Disease Name */}
      <h5
        style={{
          marginBottom: "10px",
          color: "#111827",
          fontWeight: "600",
        }}
      >
        {disease.name}
      </h5>

      {/* Symptoms */}
      <p style={{ marginBottom: "8px", color: "#374151" }}>
        <b>Symptoms:</b>{" "}
        <span style={{ color: "#4B5563" }}>
          {disease.symptoms}
        </span>
      </p>

      {/* Prevention */}
      <p style={{ marginBottom: "0", color: "#374151" }}>
        <b>Prevention:</b>{" "}
        <span style={{ color: "#4B5563" }}>
          {disease.prevention}
        </span>
      </p>
    </div>
  );
}

export default DiseaseInfoCard;
