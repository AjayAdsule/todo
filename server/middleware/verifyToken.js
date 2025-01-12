import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res
        .status(401)
        .json({ success: false, message: "Token is not provided" });
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return res
          .status(402)
          .json({ success: false, message: "Unable to decode jwt token" });
      }
      req.userId = user.userId;
      next();
    });
  } catch (error) {
    res.status(401).json({ success: false, message: "something went wrongs" });
  }
};
