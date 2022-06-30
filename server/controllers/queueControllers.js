import mongoose from "mongoose";
import Queue from "../models/queueModel.js";
import User from "../models/userModel.js";
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

export const joinQ = async (req, res, next) => {
  const { _id } = req.body;
  console.log(req.user);
  const userId = req.user._id;
  console.log(userId, _id);

  Queue.updateOne(
    {
      _id: mongoose.Types.ObjectId(_id),
      members: {
        $not: {
          $elemMatch: {
            userId: mongoose.Types.ObjectId(userId),
          },
        },
      },
    },
    {
      $push: { members: { userId } },
    },
    { new: true }
  )
    .then((result) => {
      console.log(result);
      if (result.modifiedCount === 0)
        return next(new ErrorMessage("You are already in the queue", 400));
      Queue.findById(_id)
        .then((q) => {
          if (q) {
            return res.status(200).json({
              success: true,
              message: "Successfully added to The q",
              totaltime: q.members.length * q.avgTime,
            });
          }
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

export const getAllQ = async (req, res, next) => {
  const ownerId = req.user._id;
  console.log(ownerId);
  Queue.find({ owner: ownerId })
    .then((list) => {
      if (list) {
        return res.status(200).json({
          success: true,
          message: "Successfully found List",
          queues: list,
        });
      }
    })
    .catch((err) => next(err));
};
