import { NextResponse } from "next/server";

export const catchAsync = async (fn: Function) => {
  try {
    return await fn();
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      {
        success: false,
        message: err.message,
        stack: err.stack.message,
      },
      { status: 500 }
    );
  }
};
