import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization; // Full header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    const token = authHeader.split(" ")[1]; // Extract token after "Bearer"
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the decoded token matches admin credentials
    if (decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    next();
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default adminAuth;
