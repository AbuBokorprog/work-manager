import { db } from "@/db-connect/db";
import Task from "@/models/task";
import { NextResponse } from "next/server";

db();
export async function GET(req, { params }) {
  const { userId } = params;
  try {
    const result = await Task.find({ userId });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({
      message: "failed to get task by userId",
      status: 404,
    });
  }
}
