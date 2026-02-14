import React from "react";

function DiseaseInfoCard({ disease }) {
  return (
    <div className="disease-card">
      <h3>{disease.name}</h3>
      <p><b>Symptoms:</b> {disease.symptoms}</p>
      <p><b>Prevention:</b> {disease.prevention}</p>
    </div>
  );
}

export default DiseaseInfoCard;
