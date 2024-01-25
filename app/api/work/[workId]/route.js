import { db } from "@/db-connect/db";
import Work from "@/models/work";
import { NextResponse } from "next/server";

db();
export async function DELETE(_, { params }) {
  const { workId } = params;
  try {
    const deleteWork = await Work.findOneAndDelete({ _id: workId });
    if (!deleteWork) {
      return NextResponse.json({
        message: "Work not found",
        status: 404,
      });
    }
    return NextResponse.json({
      message: "Work deleted",
      status: 200,
      deleteWork: deleteWork,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Delete failed",
      status: false,
    });
  }
}

export async function PUT(req, { params }) {
  const { workId } = params;
  const { title, description } = await req.json();
  try {
    const updateWork = await Work.findOneAndUpdate(
      { _id: workId },
      { title: title, description: description },
      { new: true, runValidators: true }
    );
    if (!updateWork) {
      return NextResponse.json({
        message: "Work not found",
        status: 400,
      });
    }

    return NextResponse.json({
      message: "Work updated",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Update failed",
      status: false,
    });
  }
}
