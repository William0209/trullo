import Task from "../models/taskModel";
import { Request, Response } from "express";

interface CustomRequest extends Request {
  user?: { id: string };
}

// Skapa ny task
export const createTask = async (req: CustomRequest, res: Response) => {
  const task = new Task({ ...req.body, assignedTo: req.user?.id });
  await task.save();
  res.status(201).json(task);
};

// Hämta alla uppgifter
export const getTasks = async (req: CustomRequest, res: Response) => {
  const tasks = await Task.find({ assignedTo: req.user?.id });
  res.json(tasks);
};

// Uppdatera task
export const updateTask = async (req: CustomRequest, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
};

// Ta bort task
export const deleteTask = async (req: CustomRequest, res: Response) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(204).send();
};