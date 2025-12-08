import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import cors from "cors";

const app = express();
const __dirname = path.resolve();

//middleware
app.use(express.json());
//credentials:true meaning ?? => server allows a browser to include cookies on request
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/api/inngest", serve({ client: inngest, functions }));

// ✅ Test API
app.get("/hii", (req, res) => {
  res.status(200).json({ msg: "success from api" });
});

// ✅ Production Mode Only
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

// ✅ Server Start

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`✅ Server running on port ${ENV.PORT}`);
      //console.log(`✅ MODE = ${ENV.NODE_ENV}`);
    });
  } catch (error) {
    console.log("error starting server", error);
  }
};

startServer();
