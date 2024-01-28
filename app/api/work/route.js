import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db-connect/db";
import Work from "@/models/work";

db();
export async function POST(req, res) {
  const { title, description } = await req.json();
  const work = new Work({ title, description });
  try {
    const result = await work.save();
    const response = NextResponse.json({
      message: "Work saved successfully",
      status: false,
      work: work,
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "Work create failed",
      status: false,
    });
  }
}

export async function GET(req, res) {
  try {
    const work = await Work.find();
    return NextResponse.json(work);
  } catch (error) {
    return NextResponse.json({
      message: "Work get failed",
      statusbar: false,
    });
  }
}
