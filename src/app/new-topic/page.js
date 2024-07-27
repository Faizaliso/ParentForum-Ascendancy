"use client";

import { useActionState } from "react";
import { newTopicAction } from "./action";

export default function Page() {
  const [_, formAction, pending] = useActionState(newTopicAction, null);
  return (
    <main>
      <section className="space-y-4">
        <h1>New Topic</h1>
        <p>Create your Topic</p>
        <form action={formAction} className="space-y-2">
          <input name="title" placeholder="title" />
          <textarea name="content" placeholder="content" rows={6} />
          <button disabled={pending}>Create</button>
        </form>
      </section>
    </main>
  );
}
