"use server";

export const createBooking = async (data: any) => {
  try {
    const res = await fetch("http://localhost:3000/api/issues", {
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
