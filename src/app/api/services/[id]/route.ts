import { NextResponse, NextRequest } from "next/server";
import { catchAsync } from "@/utils/catchAsync";
import { db } from "@/lib/db-connect";
import url from "url";
import { ObjectId } from "mongodb";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return await catchAsync(async () => {
    const mongodb = await db();
    const res = await mongodb
      .collection("services")
      .findOne({ _id: new ObjectId(id) });
    return NextResponse.json(
      {
        message: "success",
        data: res,
      },
      { status: 200 }
    );
  });
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  return await catchAsync(async () => {
    const mongodb = await db();
    const res = await mongodb
      .collection("services")
      .findOneAndDelete({ _id: new ObjectId(id) });
    return NextResponse.json(
      {
        message: "success",
        data: "Delete Successful!",
      },
      { status: 200 }
    );
  });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const data = await req.json();
  return await catchAsync(async () => {
    const mongodb = await db();
    const res = await mongodb.collection("services").findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        $set: data,
      }
    );
    return NextResponse.json(
      {
        message: "success",
        data: "Update Successful!",
      },
      { status: 200 }
    );
  });
}
