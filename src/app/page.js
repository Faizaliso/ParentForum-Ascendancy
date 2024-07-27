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
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="space-y-4">
      <section className="flex justify-between">
        <h1>All Topic</h1>
        <Link href="/new-topic">
          <button>Create New Topic</button>
        </Link>
      </section>
      <section className="space-y-2">
        {topics.map((topic) => {
          return <TopicCard key={topic.id} topic={topic} />;
        })}
      </section>
    </main>
  );
}
