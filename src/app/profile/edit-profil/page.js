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
    <main>
      <section>Edit Profile</section>
      <section>
        <UpdateUserForm user={userData} />
      </section>
    </main>
  );
}
