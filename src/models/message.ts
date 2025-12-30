import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  conversationId: String,
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("Message", MessageSchema);