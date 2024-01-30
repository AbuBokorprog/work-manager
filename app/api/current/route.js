import User from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const token = req.cookies.get("authToken")?.value;
  const verify = jwt.verify(token, process.env.JWT_KEY);
  const { _id } = verify;
  const currentUser = await User.findById({ _id: _id });
  return NextResponse.json(currentUser);
}
