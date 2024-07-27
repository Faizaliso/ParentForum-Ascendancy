"use client";

import { useActionState } from "react";
import { loginAction } from "./action";
import Link from "next/link";
import { loginWithGoogleAction } from "./action-google";

export default function Page() {
  const [state, formAction, pending] = useActionState(loginAction, null);
  return (
    <main className="space-y-5  ">
      <section className="flex flex-col justify-center items-center">
        <h3>Login</h3>
        <p>Welcome back, please login</p>
      </section>

      <form
        action={formAction}
        className="flex flex-col justify-center items-center space-y-2"
      >
        <input name="email" placeholder="Email" />
        <input name="password" placeholder="Password" type="password" />
        <button disabled={pending}>Login</button>
        {state?.status === "error" && (
          <p className="text-red-500">{state.message}</p>
        )}
      </form>

      <p className="flex justify-center">
        Don&apos;t have an account ?{" "}
        <Link href="/register" className="link">
          Register
        </Link>
      </p>

      <form action={loginWithGoogleAction}>
        <button>Continue with Google</button>
      </form>
    </main>
  );
}
