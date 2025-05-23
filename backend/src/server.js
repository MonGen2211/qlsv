import express from "express";
import { config } from "dotenv";
import { connectDb } from "./lib/connectDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import departmentRoutes from "./routes/department.routes.js";
import subjectRoutes from "./routes/subject.routes.js";
import courseRoutes from "./routes/course.routes.js";
import courseRegisterRoutes from "./routes/courseRegister.routes.js";

import cors from "cors";
const app = express();
app.use(express.json());
app.use(cookieParser());
config();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const PORT = process.env.PORT;

app.use("/api/user", userRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/subject", subjectRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/courseRegister", courseRegisterRoutes);

app.listen(PORT, () => {
  console.log(`🚀 File server running at http://localhost:`, PORT);
  connectDb();
});
// RN2Sk5daC0yKg7Z5
