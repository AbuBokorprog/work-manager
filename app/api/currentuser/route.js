import { db } from "@/db-connect/db";
import User from "@/models/users";
import { verifyToken } from "@/utils/auth";
import { NextResponse } from "next/server";

db();
export async function GET(req) {
  const token = req.cookies.get("authToken")?.value;
  const verify = verifyToken(token);
  if (verify) {
    const { _id } = verifyToken(token);
    const currentUser = await User.findById({ _id: _id });

    if (!currentUser) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }
    return NextResponse.json(currentUser);
  } else {
    return NextResponse.json({
      error: "User not found",
    });
  }
}
