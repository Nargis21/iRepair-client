"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const createService = async (data: any) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });
    const status = await res.json();
    revalidatePath("/services");
    revalidateTag("services");
    return status;
  } catch (err) {
    return { success: false };
  }
};
