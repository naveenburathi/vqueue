/* eslint-disable no-eval */
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator";
import User from "../models/userModel.js";
import ErrorMessage from "../utils/errorMessage.js";

export const register = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }
  const { name, email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (user) return next(new ErrorMessage("Already Registered", 401));

      User.create({ name, email, password })
        .then((user) => {
          if (user)
            return res.status(200).json({
              success: true,
              message: "Successfully registered!",
              user,
            });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

export const login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) return res.status(200).json({ success: true, user });
    })
    .catch((err) => next(err));
};
