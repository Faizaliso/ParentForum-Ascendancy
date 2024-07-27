import Link from "next/link";
import { serverAuth } from "@/libs/server-auth";

export const Header = () => {
  const auth = serverAuth();
  console.log(auth);

  return (
    <header className="flex justify-between items-center p-4 bg-violet-600 text-white">
      <Link href="/" className="text-lg font-semibold">
        Parenting Forum
      </Link>
      {auth ? (
        <Link href="/profile">
          <div>{auth.name}</div>
        </Link>
      ) : (
        <div className="flex gap-4 items-center">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      )}
    </header>
  );
};
