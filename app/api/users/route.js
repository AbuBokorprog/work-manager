import { NextResponse } from "next/server";
import { db } from "@/db-connect/db";
import Users from "@/models/users";
db();

export async function POST(request, _) {
  const { name, email, password } = await request.json();
  const user = new Users({ name, email, password });
  try {
    const result = await user.save();
    const response = NextResponse.json(user);
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
