console.log("Starting server...");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat";
import { connectDB } from "./db/mongo";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/chat", chatRoutes);

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (err) {
    console.error("Startup error:", err);
  }
})();