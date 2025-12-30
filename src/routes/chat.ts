import express from "express";
import Conversation from "../models/conversation";
import Message from "../models/message";
import { generateReply } from "../services/llm";

const router = express.Router();

router.post("/message", async (req, res) => {
  try {
    let { message, sessionId } = req.body;
    if (typeof message !== "string") {
    return res.status(400).json({ error: "Invalid message format." });
    }
    if (!message || message.trim() === "")
      return res.status(400).json({ error: "Empty message" });

    if (message.length > 2000) {
    return res.status(400).json({ error: "Message too long. Please shorten your input." });
    }

    let conversationId = sessionId;

    if (!conversationId) {
      const convo = await Conversation.create({});
      conversationId = convo._id.toString();
    }

    await Message.create({ conversationId, sender: "user", text: message });

    const historyDocs = await Message.find({ conversationId }).sort({ timestamp: 1 });
    const history = historyDocs
  .map(m => m.text)
  .filter((text): text is string => typeof text === "string");

    const reply = await generateReply(history, message);

    await Message.create({ conversationId, sender: "ai", text: reply });

    res.json({ reply, sessionId: conversationId });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI service unavailable" });
  }
});

router.get("/history/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;

    const messages = await Message.find({ conversationId: sessionId })
      .sort({ timestamp: 1 });

    res.json({ messages });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load history" });
  }
});

export default router;