# 🚀 AI LIVE CHAT SUPPORT AGENT

This project is a AI customer support system designed to simulate how modern companies build and deploy intelligent chat agents at scale.

The application allows users to communicate with an AI agent through a clean, responsive chat interface. Every message is processed by a robust backend service, enriched with full conversation history, securely stored in a database, and sent to a large language model for contextual response generation. The result is an AI that behaves like a real support agent, maintaining memory, understanding context, and responding reliably across sessions.

Unlike basic chatbot demos, this system is built with real engineering constraints in mind:
reliability, scalability, security, and maintainability.
All AI logic is centralized in the backend, protecting API keys and allowing the frontend to remain lightweight and safe. Conversation state is persisted in the database, enabling session continuity and horizontal scaling. The architecture cleanly separates concerns across API routing, business logic, AI services, and data storage, mirroring how production systems are structured in real engineering teams.

From user experience to infrastructure, the project demonstrates how an AI-powered feature moves from an idea to a fully deployed, real-world product.


## 🌐 LIVE APPLICATION

**Frontend:** https://spur.uditchaudhary.in

**Backend API:** https://chat-backend-ofkg.onrender.com

## 🧩 Features
	•	💬 Real-time chat interface
	•	🤖 AI responses using Google Gemini
	•	🧾 Conversation persistence with MongoDB
	•	🔄 Conversation history restored on refresh
	•	🧠 Context-aware replies using conversation history
	•	🛡️ Input validation and graceful error handling
	•	⚡ Clean, scalable backend architecture



## 🏗️ Tech Stack

### Frontend
	•	React (Vite)
	•	Tailwind CSS
	•	React Markdown

### Backend
	•	Node.js + TypeScript
	•	Express
	•	MongoDB (Mongoose)
	•	Google Gemini API



## 🧬 System Architecture
```
Client (React UI)
        ↓
REST API Layer (Express)
        ↓
Service Layer (LLM, Business Logic)
        ↓
Data Layer (MongoDB Models)
        ↓
External Systems (Google Gemini API)
```


## 🛠️ API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/chat/message` | Send message and receive AI reply |
| GET | `/chat/history/:sessionId` | Retrieve conversation history |

## 🛠️ Local Setup

### 1️⃣ Clone Repository

```bash
git clone <repo_url>
cd project
```

---

## 🧠 Backend Setup

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

### 3️⃣ Create `.env` file

```env
PORT=3000
MONGO_URI=<your_mongodb_connection_string>
GEMINI_API_KEY=<your_gemini_api_key>
```

### ▶️ Run Backend Server

```bash
npm run dev
```

Backend will run on: **http://localhost:3000**

---

## 🎨 Frontend Setup

### 4️⃣ Install Frontend Dependencies

Open a new terminal tab:

```bash
cd frontend
npm install
```

### ▶️ Run Frontend Server

```bash
npm run dev
```

Frontend will run on: **http://localhost:5173**

---

## 🔗 System Flow

```
Frontend (React / Vite)
        ↓
Backend API (Node / Express)
        ↓
MongoDB + Gemini AI
```

---

## ✅ You're Live

Open your browser and enjoy your app running locally.  
Both servers must stay running simultaneously 🧑‍💻✨


