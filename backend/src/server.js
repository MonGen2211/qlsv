import express from "express";
import { config } from "dotenv";
import { connectDb } from "./lib/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
config();
const PORT = process.env.PORT;

app.use("/api/user", userRoutes);
// app.use("/api/student", studentRoute);

app.listen(PORT, () => {
  console.log(`🚀 File server running at http://localhost:`, PORT);
  connectDb();
});
// RN2Sk5daC0yKg7Z5
