import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

export const userLog = (req, res, next) => {
  console.log(
    `Test Request is executed for user 
    ${req.url} with 
    ${req.method} Method at 
    ${new Date().toISOString()}`
  );

  next();
};

// Middleware to confirm user authentication
export const confirmUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      const er = new Error("Session Expired ! Please Login Again");
      er.statusCode = 401;
      next(er);
      return;
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const verifiedUser = await User.findById(decode.key);

    req.verifiedUser = verifiedUser;
    next();
  } catch (error) {
    next(error);
  }
};