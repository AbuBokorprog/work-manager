import { NextResponse } from "next/server";
import { db } from "@/db-connect/db";
import Users from "@/models/users";
import bcrypt from "bcrypt";

db();
export async function POST(request, _) {
  const { name, email, password, photoURL } = await request.json();
  const user = new Users({ name, email, password, photoURL });
  try {
    user.password = bcrypt.hashSync(password, 10);
    const result = await user.save();
    const response = NextResponse.json({
      message: "Sign up successfully",
      status: true,
      user: result,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "Create users failed",
      status: 400,
    });
  }
}
export async function GET(request, response) {
  try {
    const users = await Users.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({
      message: "Get users failed",
      status: 400,
    });
  }
}
