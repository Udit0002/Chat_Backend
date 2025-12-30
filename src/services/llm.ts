import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateReply(history: string[], message: string) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY missing");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
You are a helpful support agent for a small e-commerce store.

Store Policies:
- Shipping: We ship worldwide within 5–7 business days.
- Returns: 30-day return policy on unused items.
- Support: Mon–Fri, 9am–6pm IST.

Conversation so far:
${history.join("\n")}

User: ${message}
AI:
`;

    const result = await model.generateContent(prompt);
    return result.response.text();

  } catch (err) {
    console.error("GEMINI ERROR:", err);
    throw err;
  }
}