import express from "express";
import { createQueue, joinQ } from "./controllers/queueControllers.js";

// project imports
import { register, login } from "./controllers/userControllers.js";
import { isAuth } from "./middlewares/authMiddlewares.js";

const router = express.Router();

// welcome route
router.get("/", (req, res) => res.send("<h1>Hello from server</h1>"));

// Auth routes
router.post("/register", register);
router.post("/login", login);

// Queue routes
router.post("/queue/create", isAuth, createQueue);
router.post("/queue/join", joinQ);

export default router;
