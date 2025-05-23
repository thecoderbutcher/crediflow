import { db } from "@/lib/db";

export const viewEmployee = async(id: string) => {
  return await db.user.findUnique({
    where:{id}
  })
}
