"use client";

// import { useActionState } from "react";
import { logoutAction } from "./action";

export const UpdateUserForm = ({ user }) => {
  // const [state, formAction, pending] = (useActionState, null);
  return (
    <main>
      <form className="space-y-2">
        <input name="name" placeholder="name" defaultValue={user?.name} />
        <input
          name="email"
          type="email"
          placeholder="email"
          defaultValue={user?.email}
        />

        <button>Save Profile</button>
        {/* {state?.status === "error" && (
        <p className="text-red-500">{state.message}</p>
      )}
      {state?.status === "success" && (
        <p className="text-emerald-500">{state.message}</p>
      )} */}
      </form>
      <form action={logoutAction}>
        <button>Log Out</button>
      </form>
    </main>
  );
};
