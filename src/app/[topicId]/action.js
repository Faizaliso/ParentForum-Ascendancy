"use server";

import { serverAuth } from "@/libs/server-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function newCommentAction(_, formData) {
  const topicId = formData.get("topicId");
  const content = formData.get("content");

  //userid
  const auth = serverAuth();
  if (!auth) {
    redirect("/login");
  }

  const userId = auth.id;

  try {
    await prisma.comment.create({
      data: {
        content,
        userId,
        topicId,
      },
    });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/[topicId]", "page");
}
