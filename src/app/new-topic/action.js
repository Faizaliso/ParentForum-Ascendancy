"use server";

import { serverAuth } from "@/libs/server-auth";
import { redirect } from "next/navigation";
import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { uploadFile } from "@/libs/uploadFile";

export async function newTopicAction(_, formData) {
  const title = formData.get("title");
  const content = formData.get("content");
  const file = formData.get("file");

  //userid
  const auth = serverAuth();
  if (!auth) {
    redirect("/login");
  }

  const userId = auth.id;

  const topic = await prisma.topic.create({
    data: {
      title,
      content,
      userId,
      image: file.name,
    },
  });

  await uploadFile({ key: file.name, body: file, folder: topic.id });

  revalidatePath("/");
  // redirect(`/${newTopic.id}`);
  redirect("/");
}
