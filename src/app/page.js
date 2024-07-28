import { prisma } from "@/utils/prisma";
import Link from "next/link";
import { TopicCard } from "@/components/topicCard";

export default async function Page() {
  const topics = await prisma.topic.findMany({
    include: {
      user: {
        select: {
          name: true,
          avatarUrl: true,
        },
      },
      comments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log(topics);

  return (
    <main className="space-y-4 ">
      <section className="space-y-8 bg-white p-8 rounded-lg">
        <div className="flex justify-between items-center">
          <h1>All Topic</h1>
          <Link href="/new-topic">
            <button>Create New Topic</button>
          </Link>
        </div>

        {topics.map((topic) => {
          return <TopicCard key={topic.id} topic={topic} />;
        })}
      </section>
    </main>
  );
}
