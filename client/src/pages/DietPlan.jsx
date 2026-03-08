import React, { useEffect, useState } from "react";

function DietPlan() {

  const [dietPlan, setDietPlan] = useState("");
  const predictedDisease = localStorage.getItem("predictedDisease");

  useEffect(() => {

    const fetchDiet = async () => {

      if (!predictedDisease) return;

      try {

        const response = await fetch("http://localhost:5001/diet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            disease: predictedDisease
          })
        });

        const data = await response.json();

        setDietPlan(data.diet);

      } catch (error) {
        setDietPlan("Could not load diet plan.");
      }

    };

    fetchDiet();

  }, [predictedDisease]);

  return (
    <div
      className="vh-100 d-flex flex-column"
      style={{ backgroundColor: "#FFFEF9" }}
    >

      <div className="text-center pt-5">
        <h2 style={{ color: "#1F2937", fontWeight: "600" }}>
          Recommended Diet Plan
        </h2>
        <p style={{ color: "#6B7280", fontSize: "14px" }}>
          Diet based on predicted disease
        </p>
      </div>

      <div className="flex-grow-1 overflow-auto px-4 py-4">
        <div
          className="mx-auto"
          style={{ maxWidth: "720px" }}
        >

          {predictedDisease ? (

            <div
              className="p-4 rounded-4"
              style={{
                backgroundColor: "#F3F4F6",
                color: "#1F2937",
                fontSize: "14px",
                lineHeight: "1.6",
                whiteSpace: "pre-line"
              }}
            >

              <h5 style={{ fontWeight: "600", marginBottom: "10px" }}>
                🍽 Diet for {predictedDisease}
              </h5>

              {dietPlan || "Loading diet plan..."}

            </div>

          ) : (

            <div
              className="p-4 rounded-4"
              style={{
                backgroundColor: "#F3F4F6",
                color: "#1F2937"
              }}
            >
              Please use the chatbot first to predict a disease.
            </div>

          )}

        </div>
      </div>

    </div>
  );
}

export default DietPlan;