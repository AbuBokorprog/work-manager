import { NextResponse } from "next/server";
import { db } from "@/db-connect/db";
import Users from "@/models/users";
db();

export async function DELETE(_, { params }) {
  const { email } = params;

  try {
    const deleteUser = await Users.findOneAndDelete({ email });
    if (!deleteUser) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }
    return NextResponse.json({
      message: "User deleted",
      status: true,
      deleteUser: deleteUser,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't delete user",
      status: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { email } = params;

  try {
    // Extract updated data from request body
    const { newName, newPassword } = await request.json();

    // Find and update the user
    const updatedUser = await Users.findOneAndUpdate(
      { email: email },
      { name: newName, password: newPassword },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: "User not found",
        status: 404,
      });
    }

    return NextResponse.json({
      message: "User updated successfully",
      status: 200,
      updateUser: updatedUser,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Couldn't update user",
      status: false,
      error: error.message,
    });
  }
}
