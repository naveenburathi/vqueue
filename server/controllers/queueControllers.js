import Queue from "../models/queueModel.js";
import ErrorMessage from "../utils/errorMessage.js";

export const createQueue = async (req, res, next) => {
  const { name, avgTime, desc } = req.body;

  if (!req.user) return next(new ErrorMessage("Access Denied", 401));

  Queue.create({ name, avgTime, desc, owner: req.user._id })
    .then((queue) => {
      if (queue)
        return res.status(200).json({
          success: true,
          message: "Successfully created!",
          queue,
        });
    })
    .catch((err) => next(err));
};
