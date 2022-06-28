import express from "express";

// project imports
import { register, login } from "./controllers/userControllers.js";

const { CLIENT_URL } = process.env;

const router = express.Router();

// welcome route
router.get("/", (req, res) => res.send("<h1>Hello from server</h1>"));

// Auth routes
router.post("/register", register);
router.post("/login", login);

export default router;
