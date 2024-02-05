import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const res = await fetch(
      `${process.env.BACKEND_URL}/api/v1/services?${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    return NextResponse.json(
      {
        message: "success",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "failed",
        error: error,
      },
      { status: 500 }
    );
  }
}
