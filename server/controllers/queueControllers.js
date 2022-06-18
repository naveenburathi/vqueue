import Queue from "../models/queueModel.js";
import ErrorMessage from "../utils/errorMessage.js";

export const createQueue = async (req, res, next) => {
  const { name, avgTime, description } = req.body;
  Queue.create({ name, avgTime, description })
    .then((user) => {
      if (user)
        return res.status(200).json({
          success: true,
          message: "Successfully registered!",
          user,
        });
    })
    .catch((err) => next(err));
};
