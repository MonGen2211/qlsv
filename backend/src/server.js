import express from "express";
import { config } from "dotenv";
import { connectDb } from "./lib/connectDb.js";

import userRoutes from "./routes/user.route.js";
const app = express();
app.use(express.json());
config();
const PORT = process.env.PORT;

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 File server running at http://localhost:`, PORT);
  connectDb();
});
// RN2Sk5daC0yKg7Z5
