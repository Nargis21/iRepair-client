"use server";
import { TBookingFormValues } from "@/components/ui/BookingForm";

export const createBooking = async (data: any) => {
  try {
    const res = await fetch("http://localhost:5000/api/v1/issues", {
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
