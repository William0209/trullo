import Project from "../models/projectModel";
import { Request, Response } from "express";

interface CustomRequest extends Request {
  user?: { id: string }; // eller den typ du använder för user
}

export const createProject = async (req: CustomRequest, res: Response) => {
  const project = new Project({ ...req.body, userId: req.user?.id });
  await project.save();
  res.status(201).json(project);
};

export const getProjects = async (req: CustomRequest, res: Response) => {
  const projects = await Project.find({ userId: req.user?.id }).populate("tasks");
  res.json(projects);
};