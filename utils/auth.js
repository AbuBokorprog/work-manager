import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_KEY;

export function verifyToken(authToken) {
  const decode = jwt.verify(authToken, secretKey);
  return decode;
}
