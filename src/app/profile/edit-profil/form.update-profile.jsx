"use client";

import { useActionState } from "react";
import { logoutAction } from "./action";
import { updateProfileAction } from "./action";

export const UpdateUserForm = ({ user }) => {
  const [state, formAction, pending] = useActionState(updateProfileAction, null);
  return (
    <main>
      <form action={formAction} className="space-y-2">
        <input type="hidden" name="id" defaultValue={user?.id} />
        <input name="name" placeholder="name" defaultValue={user?.name} />
        <input
          name="email"
          type="email"
          placeholder="email"
          defaultValue={user?.email}
          disabled
        />

        <button>Save Profile</button>
        {state?.status === "error" && (
          <p className="text-red-500">{state.message}</p>
        )}
        {state?.status === "success" && (
          <p className="text-emerald-500">{state.message}</p>
        )}
      </form>
      <form action={logoutAction}>
        <button>Log Out</button>
      </form>
    </main>
  );
};
