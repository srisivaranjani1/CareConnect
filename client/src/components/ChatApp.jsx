import React, { useState, useRef, useEffect } from "react";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };

    setMessages(prev => [...prev, userMessage]);

    try {
      const response = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          symptoms: [input]
        })
      });

      const data = await response.json();

      // Save predicted disease
      if (data.disease) {
        localStorage.setItem("predictedDisease", data.disease);
      }

      setMessages(prev => [
        ...prev,
        { role: "assistant", text: data.message }
      ]);

    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: "assistant", text: "Server error. Please try again." }
      ]);
    }

    setInput("");
  };

  const goToDietPage = () => {
    const disease = localStorage.getItem("predictedDisease");

    if (!disease) {
      alert("Please ask about symptoms first to predict a disease.");
      return;
    }

    window.location.href = "/diet";
  };

  return (
    <div
      className="vh-100 d-flex flex-column"
      style={{ backgroundColor: "#FFFEF9" }}
    >

      {/* CHAT WINDOW */}
      <div className="flex-grow-1 overflow-auto px-4 py-5">
        <div
          className="mx-auto d-flex flex-column gap-3"
          style={{ maxWidth: "720px" }}
        >

          {messages.length === 0 ? (
            <div className="text-center mt-5">
              <div
                className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "#F3F4F6",
                  fontSize: "22px",
                }}
              >
                💬
              </div>
              <p style={{ color: "#6B7280", fontSize: "15px" }}>
                Start a conversation with your healthcare assistant
              </p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`d-flex ${
                  msg.role === "user"
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  className="px-4 py-2 rounded-4"
                  style={{
                    maxWidth: "75%",
                    backgroundColor:
                      msg.role === "user" ? "#111827" : "#F3F4F6",
                    color:
                      msg.role === "user" ? "#FFFFFF" : "#1F2937",
                    fontSize: "14px",
                    lineHeight: "1.5",
                    whiteSpace: "pre-line"
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))
          )}

          <div ref={messagesEndRef} />

        </div>
      </div>

      {/* INPUT BAR */}
      <div
        className="border-top px-3 py-3"
        style={{ backgroundColor: "#FFFEF9" }}
      >
        <div
          className="mx-auto d-flex align-items-center gap-2"
          style={{ maxWidth: "720px" }}
        >

          <input
            type="text"
            className="form-control rounded-pill px-4"
            placeholder="Ask about symptoms, diseases, medications..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            style={{ border: "1px solid #E5E7EB" }}
          />

          {/* Send Button */}
          <button
            className="btn btn-dark rounded-pill px-4"
            onClick={handleSend}
          >
            Send
          </button>

          {/* Diet Plan Button */}
          <button
            className="btn btn-dark rounded-pill px-4"
            onClick={goToDietPage}
          >
            DietPlan
          </button>

        </div>
      </div>

    </div>
  );
}

export default ChatApp;