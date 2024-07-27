"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return {
      status: "error",
      message: "User Not Found",
    };
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return {
      status: "error",
      message: "Password Not Match",
    };
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = await jwt.sign(payload, process.env.JWT_SECRET);

  cookies().set("token", token);

  redirect("/");
}
