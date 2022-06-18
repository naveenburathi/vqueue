import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const queueSchema = mongoose.Schema(
  {
    uuid: { type: String, default: uuidv4() },
    name: { type: String, unique: true },
    avgTime: Number,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    members: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        _id: false,
      },
    ],
    desc: String,
  },
  { timestamps: true }
);
const Queue = mongoose.model("Queue", queueSchema);
export default Queue;
