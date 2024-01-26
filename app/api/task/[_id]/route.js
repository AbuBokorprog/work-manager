import { db } from "@/db-connect/db";
import Task from "@/models/task";
import { NextResponse } from "next/server";

db();
export async function GET(req, { params }) {
  const { _id } = params;
  try {
    const task = await Task.findById({ _id });
    return NextResponse.json(task);
  } catch (err) {
    return NextResponse({
      message: "Specific task get failed",
      status: 404,
    });
  }
}

export async function DELETE(_, { params }) {
  const { _id } = params;
  try {
    const deleteTask = await Task.findOneAndDelete({ _id });
    if (!deleteTask) {
      return NextResponse.json({
        message: "Task not found",
        status: 400,
      });
    }

    return NextResponse.json({
      message: "Task deleted",
      status: 200,
      deleteTask: deleteTask,
    });
  } catch (err) {
    return NextResponse.json({
      message: "Task delete failed",
      status: false,
    });
  }
}
export async function PUT(req, { params }) {
  const { _id } = params;
  const { title, content } = await req.json();
  try {
    const updateTask = await Task.findOneAndUpdate(
      { _id: _id },
      { title: title, content: content },
      { new: true, runValidators: true }
    );

    if (!updateTask) {
      return NextResponse.json({
        message: "Task not found",
        status: 400,
      });
    }
    return NextResponse.json({
      message: "Task successfully updated",
      status: 200,
      updateTask: updateTask,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Task update failed",
      status: false,
    });
  }
}
