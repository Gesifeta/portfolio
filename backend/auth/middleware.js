import { verifyToken } from "./authentication.js";

// A middleware to check if user is authenticated
export const isAuthenticated = (req, res, next) => {
  const token = req.cookies?.token;
console.log("cookies ==== == >",token)
  if (!token) {
    return res.status(401).json({ error: "Unauthorized",message:"You are not logged in." });
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
