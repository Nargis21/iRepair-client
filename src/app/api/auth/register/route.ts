import { NextResponse, NextRequest } from "next/server";
import { catchAsync } from "@/utils/catchAsync";
import { db } from "@/lib/db-connect";

export async function POST(req: NextRequest) {
  const data = await req.json();
  return await catchAsync(async () => {
    const mongodb = await db();
    const res = await mongodb.collection("users").insertOne(data);
    return NextResponse.json(
      {
        message: "success",
        data: res,
      },
      { status: 200 }
    );
  });
}
