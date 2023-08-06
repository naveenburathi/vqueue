/* eslint-disable prettier/prettier */
import express from "express";
import compression from "compression";
import cors from "cors";
import logger from "morgan";

// project imports
import router from "../router.js";
import handleError from "../middlewares/handleError.js";
import ErrorMessage from "../utils/errorMessage.js";

const configureExpress = (app) => {
  // const whitelist = process.env.WHITELISTED_DOMAINS
  //   ? process.env.WHITELISTED_DOMAINS.split(",")
  //   : [];

  // const corsOptions = {
  //   origin(origin, cb) {
  //     if (!origin || whitelist.indexOf(origin) !== -1) {
  //       cb(null, true);
  //     } else {
  //       cb(new ErrorMessage("Not allowed by CORS", 500));
  //     }
  //   },
  //   credentials: true,
  // };

  app.use(logger("dev"));
  app.use(compression());
  // app.use(cors(corsOptions));
  app.use(cors());
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from any origin
  //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  //   next();
  // });
  app.use(express.json({ limit: "5mb" }));
  app.use(express.urlencoded({ limit: "5mb", extended: true }));
  app.use("/", router);
  app.use(handleError);
};

export default configureExpress;
