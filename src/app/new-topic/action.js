"use server";

import { serverAuth } from "@/libs/server-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function newTopicAction(_, formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  //userid
  const auth = serverAuth();
  if (!auth) {
    redirect("/login");
  }

  const userId = auth.id;

  await prisma.topic.create({
    data: {
      title,
      content,
      userId,
    },
  });

  revalidatePath("/");
  // redirect(`/${newTopic.id}`);
  redirect("/");
}
