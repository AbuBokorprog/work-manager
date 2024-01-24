import { NextResponse } from "next/server";
export function GET(_, { params }) {
  const { id } = params;
  return NextResponse.json({ result: "hello world", id });
}
