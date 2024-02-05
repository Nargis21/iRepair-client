"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const editService = async ({ id, data }: any) => {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/api/services/${id}`, {
      method: "PUT",
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
