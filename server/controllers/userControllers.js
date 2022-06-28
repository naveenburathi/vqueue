import { SIGNIN, SIGNUP } from "../config/constants.js";
import User from "../models/userModel.js";
import ErrorMessage from "../utils/errorMessage.js";
import validate from "../validators/validate.js";

export const register = async (req, res, next) => {
  const { error } = validate(req.body, SIGNUP);

  if (error) return next(new ErrorMessage(error.details[0].message, 400));

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne({ email: req.body.email })
    .then((oldUser) => {
      if (oldUser) return next(new ErrorMessage("Already Registered", 401));

      User.create(user)
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
  const { error } = validate(req.body, SIGNIN);
  if (error) return next(new ErrorMessage(error.details[0].message, 400));
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) return res.status(200).json({ success: true, user });
    })
    .catch((err) => next(err));
};
