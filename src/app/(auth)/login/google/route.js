import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { prisma } from "@/utils/prisma";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

export async function GET(req) {
  //get code
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const codeVerifier = cookies().get("codeVerifier").value;

  const tokens = await google.validateAuthorizationCode(code, codeVerifier);

  //use token to get user info
  const res = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: {
      Authorization: `Bearer ${tokens.accessToken}`,
    },
  });

  const user = await res.json();
  //   console.log(user);

  //continue with google
  const findUser = await prisma.user.findFirst({
    where: {
      email: user.email,
    },
  });

  //checking
  if (!findUser) {
    //create account
    const newUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.name,
      },
    });
    const payload = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);
    cookies().set("token", jwtToken);

    redirect("/");
  }

  const payload = {
    id: findUser.id,
    name: findUser.name,
    email: findUser.email,
  };

  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET);
  cookies().set("token", jwtToken);

  redirect("/");
}
