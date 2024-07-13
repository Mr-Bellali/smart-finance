import admin from "../config/firebase-config.js";

class AuthMiddleware {
  async decodeToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        return next();
      } else {
        return res.status(401).json({ message: "Unauthorized" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new AuthMiddleware();
