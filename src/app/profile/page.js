import { serverAuth } from "@/libs/server-auth";
import { prisma } from "@/utils/prisma";
import { TopicCard } from "./topicCard";
import Link from "next/link";

export default async function Page() {
  const user = await serverAuth();

  const userData = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
    include: {
      topics: true,
    },
  });

  return (
    <main className="flex flex-col gap-6 bg-white p-8 rounded-lg">
      <section className="flex flex-col gap-3">
        <h2>{userData.name}</h2>
        <Link href="/profile/edit-profil">
          <button className="w-fit py-1 px-2 text-sm">Edit Profile</button>
        </Link>
      </section>
      <section className="flex flex-col gap-3">
        <h3>Topics</h3>
        {userData.topics.map((topic) => {
          return <TopicCard key={topic.id} topic={topic} />;
        })}
      </section>
    </main>
  );
}
