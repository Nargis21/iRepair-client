"use server";

export const createService = async (data: any) => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/services", {
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
