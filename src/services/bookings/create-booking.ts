"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const createBooking = async (data: any) => {
  try {
    const res = await fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });
    const status = await res.json();
    revalidateTag("bookings");
    return status;
  } catch (err) {
    return { success: false };
  }
};
