import { serverAuth } from "@/libs/server-auth";
import { UpdateUserForm } from "./form.update-profile";
import { prisma } from "@/utils/prisma";

export default async function Page() {
  const user = await serverAuth();

  const userData = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });

  return (
    <main className="flex flex-col bg-white p-8 gap-7 rounded-lg">
      <h2>Edit Profile</h2>
      <section>
        <UpdateUserForm user={userData} />
      </section>
    </main>
  );
}
