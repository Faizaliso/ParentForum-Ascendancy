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
    <main>
      <section>
        <h2>{userData.name}</h2>
        <Link href="/profile/edit-profil">
          <button>Edit Profile</button>
        </Link>
      </section>
      <section>
        {userData.topics.map((topic) => {
          return <TopicCard key={topic.id} topic={topic} />;
        })}
      </section>
    </main>
  );
}
