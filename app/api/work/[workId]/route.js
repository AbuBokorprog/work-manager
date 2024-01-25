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
    });
  } catch (error) {
    return NextResponse.json({
      message: "Delete failed",
      status: false,
    });
  }
}
