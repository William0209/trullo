import express from "express";
import connectDB from "./config/db";
import userRoutes from "./routes/userRoutes";
import taskRoutes from "./routes/taskRoutes";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./utils/errorHandler";

dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});