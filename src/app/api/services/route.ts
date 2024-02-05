import { NextRequest, NextResponse } from "next/server";
import url from "url";

export async function GET(req: NextRequest) {
  try {
    const queryParams = url.parse(req.url, true).query || {};

    const res = await fetch(
      `${process.env.BACKEND_URL}/api/v1/services?${queryParams}`,
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

