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
    <main className="flex flex-col gap-8 bg-white p-8 rounded-lg">
      <section className="bg-slate-200 p-5 space-y-4 rounded-lg">
        <div className="unsolved">
          <p className=" text-[10px] font-medium text-rose-500">UNSOLVED</p>
        </div>
        <h1>{topic.title}</h1>
        <p>{topic.content}</p>
        <p>by {topic.user.name}</p>
        <Image
          alt="topic-image"
          src={`${process.env.R2_PUBLIC_URL}/parentforum/${topic.id}/${topic.image}`}
          width={600}
          height={400}
          className="rounded-lg"
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
              <p className="font-medium">{comment.content}</p>
              <p>by {comment.user.name}</p>
            </div>
          );
        })}
      </section>
      <CreateCommentForm topicId={params.topicId} />
    </main>
  );
}
