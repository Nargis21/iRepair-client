"use server";

import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export const getSession = async () => {
  return await getServerSession(authOptions);
};
