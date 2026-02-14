import React, { useState } from "react";
import ChatWindow from "../components/ChatWindow";
import InputBox from "../components/InputBox";
import { sendChatMessage } from "../services/chatbotAPI";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const userMsg = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    const res = await sendChatMessage(text);

    const botMsg = { sender: "bot", text: res.reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <div className="chat-page">
      <ChatWindow messages={messages} />
      <InputBox sendMessage={sendMessage} />
    </div>
  );
}

export default Chatbot;
