import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_KEY;

export function verifyToken(token) {
  try {
    const decode = jwt.verify(token, secretKey);
    console.log(decode);
    return decode;
  } catch (error) {
    throw new Error("Token verification failed");
  }
}
