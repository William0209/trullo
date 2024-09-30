import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["to-do", "in progress", "blocked", "done"],
      default: "to-do",
    },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    createdAt: { type: Date, default: Date.now },
    finishedBy: { type: Date },
    tags: { type: [String] },
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;