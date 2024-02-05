"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const deleteService = async (id: string) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/services/${id}`, {
      method: "DELETE",
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
