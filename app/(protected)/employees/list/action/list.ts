'use server'
import { db } from "@/lib/db";

export const listEmployees = async () => {
  return await db.user.findMany({
  });
}
