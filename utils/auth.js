import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_KEY;

export function verifyToken(authToken) {
  try {
    const decode = jwt.verify(authToken, secretKey);
    return decode;
  } catch (error) {
    throw new Error("Token verification failed");
  }
}
