import User from "../models/userModel";
import { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { hashPassword, comparePassword } from "../utils/passwordUtils";

interface CustomRequest extends Request {
  user?: { id: string };
}

// Registrera användare med validering
export const registerUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  async (req: CustomRequest, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json(user);
  }
];

// Logga in användare
export const loginUser = async (req: CustomRequest, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  // Generera och returnera JWT-token här
};

// Hämta användarprofil
export const getUserProfile = async (req: CustomRequest, res: Response) => {
  const user = await User.findById(req.user?.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

// Uppdatera användarprofil
export const updateUserProfile = async (req: CustomRequest, res: Response) => {
  const user = await User.findByIdAndUpdate(req.user?.id, req.body, { new: true });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

// Ta bort användare
export const deleteUser = async (req: CustomRequest, res: Response) => {
  const user = await User.findByIdAndDelete(req.user?.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(204).send();
};