import { prisma } from "@/utils/prisma";
import { CreateCommentForm } from "./form.create-comment";
import Image from "next/image";

export default async function Page({ params }) {
  const topic = await prisma.topic.findFirst({
    where: {
      id: params.topicId,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  const comments = await prisma.comment.findMany({
    where: {
      topicId: params.topicId,
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="space-y-6">
      <section className="space-y-4">
        <h1>{topic.title}</h1>
        <p>{topic.content}</p>
        <p>{topic.user.name}</p>
        <Image
          alt="topic-image"
          src={`${process.env.R2_PUBLIC_URL}/parentforum/${topic.id}/${topic.image}`}
          width={600}
          height={400}
        />
      </section>
      <section className="space-y-2">
        <h3>Replies</h3>
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="p-4 border border-slate-200 rounded-lg"
            >
              <p className="font-semibold">{comment.content}</p>
              <p>{comment.user.name}</p>
            </div>
          );
        })}
      </section>
      <CreateCommentForm topicId={params.topicId} />
    </main>
  );
}
