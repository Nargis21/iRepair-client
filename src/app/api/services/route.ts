import { NextResponse, NextRequest } from "next/server";
import { catchAsync } from "@/utils/catchAsync";
import { db } from "@/lib/db-connect";
import url from "url";

export async function GET(req: NextRequest) {
  const queryParams = url.parse(req.url, true).query || {};
  return await catchAsync(async () => {
    const mongodb = await db();
    const res = await mongodb
      .collection("services")
      .find(queryParams)
      .toArray();
    return NextResponse.json(
      {
        message: "success",
        data: res,
      },
      { status: 200 }
    );
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return await catchAsync(async () => {
    const mongodb = await db();
    const res = await mongodb.collection("services").insertOne(data);
    return NextResponse.json(
      {
        message: "success",
        data: res,
      },
      { status: 200 }
    );
  });
}
