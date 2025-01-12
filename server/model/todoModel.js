import mongoose, { Schema } from "mongoose";

const TodoModel = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Completed", "In-progress"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  dueDate: {
    type: Date,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

export default mongoose.model("Todo", TodoModel);
