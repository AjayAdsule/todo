import mongoose, { Schema } from "mongoose";

const UserModal = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  isVerified: {
    type: Boolean,
  },
});

export default mongoose.model("Users", UserModal);
