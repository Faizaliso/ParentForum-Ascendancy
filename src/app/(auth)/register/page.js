"use client";

import { useActionState } from "react";
import { registerAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);
  return (
    <main>
      <form className="space-y-2">
        <button className=" bg-white border border-slate-300 text-slate-700">
          Continue with Google
        </button>
      </form>
      <form action={formAction} className="flex flex-col gap-2">
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <input
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <button disabled={pending}>Register</button>
        {state?.status === "error" && (
          <p className="text-red-500">{state.message}</p>
        )}
        {state?.status === "success" && (
          <p className="text-emerald-500">{state.message}</p>
        )}
      </form>
    </main>
  );
}
