import axios from "axios";

const API = "http://localhost:5000/api/chat";

export const sendChatMessage = async (message) => {
  try {
    const res = await axios.post(API, { message });
    return res.data;
  } catch (error) {
    return { reply: "Server error. Try later." };
  }
};
