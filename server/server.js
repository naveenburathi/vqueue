/* eslint-disable prettier/prettier */
import express, { json } from "express";
import dotenv from "dotenv";

// project imports
import configureExpress from "./config/appConfig.js";
import connectDB from "./config/db.js";

// dotenv config
dotenv.config();
const app = express();
app.use(json());

DB_URL  = process.env.DB_URL;
PORT=process.env.PORT||4000

connectDB(DB_URL);
configureExpress(app);

// Run the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

app.on("unhandledRejection", (err) => {
  console.log(`Error: err`);
  app.close(() => app.exit(1));
});
