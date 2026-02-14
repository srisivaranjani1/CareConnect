import React from "react";
import DiseaseInfoCard from "../components/DiseaseInfoCard";

function Awareness() {
  const diseases = [
    {
      name: "Dengue",
      symptoms: "Fever, headache, joint pain",
      prevention: "Avoid mosquito bites"
    },
    {
      name: "Diabetes",
      symptoms: "High sugar, thirst, fatigue",
      prevention: "Healthy diet, exercise"
    }
  ];

  return (
    <div className="page">
      <h2>Disease Awareness</h2>
      {diseases.map((d, i) => (
        <DiseaseInfoCard key={i} disease={d} />
      ))}
    </div>
  );
}

export default Awareness;
