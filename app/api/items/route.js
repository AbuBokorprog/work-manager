import { NextResponse } from "next/server";
import items from "../../../public/utils/items/items.json";
import { db } from "@/db-connect/db";
db();

export function GET(req, res) {
  const item = items;
  return NextResponse.json({ item });
}
