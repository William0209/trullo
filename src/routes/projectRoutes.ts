import express from "express";
import { createProject, getProjects } from "../controllers/projectController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, createProject);
router.get("/", authMiddleware, getProjects);
// Andra rutter kan läggas till här

export default router;
