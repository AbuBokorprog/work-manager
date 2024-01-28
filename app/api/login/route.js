import { db } from "@/db-connect/db";
import bcrypt from "bcrypt";
import Users from "@/models/users";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { verifyToken } from "@/utils/auth";

db();
export async function POST(req, res) {
  const { email, password } = await req.json();
  try {
    // Find the user
    const user = await Users.findOne({ email: email });

    if (!user) {
      return NextResponse.json({
        message: "User not found",
        status: 500,
      });
    }

    // Compare passwords
    const matched = bcrypt.compareSync(password, user.password);

    if (!matched) {
      return NextResponse.json({
        message: "Password mismatch",
        status: 500,
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    verifyToken(token);

    const response = NextResponse.json({
      message: "Login success",
      user: user,
    });
    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Login failed",
      status: 500,
    });
  }
}
