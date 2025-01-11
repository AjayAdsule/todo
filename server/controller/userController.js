import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModal from "./../model/userModel.js";

export const userSignin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModal.findOne({ email });
    if (!user) {
      return res
        .status(406)
        .json({ success: false, message: "User is not found please register" });
    }
    const matchPassword = bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res
        .status(406)
        .json({ success: false, message: "Password is not match" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
    return res.status(200).json({ success: true, user, token });
  } catch (error) {
    return res.status(406).json({ success: false, message: error });
  }
};

export const userSignup = async (req, res) => {
  const { name, email, password, confirm_password } = req.body;
  console.log({ name, email, password, confirm_password });
  try {
    if (password !== confirm_password) {
      return res
        .status(406)
        .json({ success: false, message: "Password is not match" });
    }
    const isUserExist = await UserModal.findOne({ email });

    if (isUserExist) {
      return res
        .status(406)
        .json({ success: false, message: "User is already register" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModal({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(200).json({ success: true, users: newUser });
  } catch (error) {
    res.status(406).json({ success: false, message: "something went wrong" });
  }
};
