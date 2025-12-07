import express from "express";
import path from "path";
import { ENV } from "./lib/env.js";

const app = express();
const __dirname = path.resolve();

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
app.listen(ENV.PORT, () => {
  console.log(`✅ Server running on port ${ENV.PORT}`);
  console.log(`✅ MODE = ${ENV.NODE_ENV}`);
});

