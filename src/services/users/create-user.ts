"use server";

export const createUser = async (data: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    });
    const status = await res.json();
    return status;
  } catch (err) {
    return { success: false };
  }
};
