# 🚀 TalentHunt – DSA & Mock Interview Platform

TalentHunt is a **full-stack MERN platform** designed to help developers sharpen their **DSA skills** and experience **real-time mock interviews** with **video calling, screen sharing, and live coding**.

---

## ✨ Highlights

🧑‍💻 VSCode-Powered Code Editor  
🔐 Authentication via Clerk  
🎥 1-on-1 Video Interview Rooms  
🧭 Dashboard with Live Stats  
🔊 Mic & Camera Toggle, Screen Sharing & Recording  
💬 Real-time Chat Messaging  
⚙️ Secure Code Execution in Isolated Environment  
🎯 Auto Feedback — Success / Fail based on test cases  
🎉 Confetti on Success + Notifications on Fail  
🧩 Practice Problems Page (Solo Coding Mode)  
🔒 Room Locking — Allows Only 2 Participants  
🧠 Background Jobs with Inngest (Async Tasks)  
🧰 REST API with Node.js & Express  
⚡ Data Fetching & Caching via TanStack Query  
🤖 CodeRabbit for PR Analysis & Code Optimization  
🧑‍💻 Git & GitHub Workflow (Branches, PRs, Merges)  
🚀 Deployment on Sevalla (Free-Tier Friendly)  

---

## 🛠 Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** Clerk  
- **Real-Time Communication:** WebRTC, Socket.io  
- **Async Jobs:** Inngest  
- **State & Data Fetching:** TanStack Query  
- **Deployment:** Sevalla  

---

## 📁 Environment Setup

### ✅ Backend (`/backend`) – `.env`

```env
PORT=3000
NODE_ENV=development

DB_URL=your_mongodb_connection_url

INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

CLIENT_URL=http://localhost:5173
###Frontend (/frontend) – .env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_API_URL=http://localhost:3000/api

VITE_STREAM_API_KEY=your_stream_api_key
