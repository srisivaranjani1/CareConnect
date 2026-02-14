import React from "react";

function MessageBubble({ message }) {
  return (
    <div className={message.sender === "user" ? "user-msg" : "bot-msg"}>
      {message.text}
    </div>
  );
}

export default MessageBubble;
