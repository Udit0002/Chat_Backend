import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Conversation", ConversationSchema);