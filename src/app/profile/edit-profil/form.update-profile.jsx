"use client";

// import { useActionState } from "react";
import { logoutAction } from "./action";

export const UpdateUserForm = ({ user }) => {
  // const [state, formAction, pending] = (useActionState, null);
  return (
    <main className="space-y-4">
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
        <button className="bg-transparent w-fit text-gray-600 text-sm">
          Log Out
        </button>
      </form>
    </main>
  );
};
