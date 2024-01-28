import { db } from "@/db-connect/db";
import Task from "@/models/task";
import { NextResponse } from "next/server";

db();
export async function POST(req, res) {
  const { title, content, userId } = await req.json();
  const task = new Task({ title, content, userId });
  try {
    const createdTask = await task.save();
    const response = NextResponse.json({
      message: "Task saved successfully",
      status: true,
      createdTask: createdTask,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "Failed to create task",
      status: false,
    });
  }
}

export async function GET(req, res) {
  try {
    const readTask = await Task.find();
    return NextResponse.json(readTask);
  } catch (err) {
    return NextResponse.json({
      message: "Failed to Get task",
      status: false,
    });
  }
}
