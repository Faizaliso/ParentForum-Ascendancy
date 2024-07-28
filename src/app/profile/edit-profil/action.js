"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/utils/prisma";

export async function logoutAction() {
  cookies().delete("token");

  redirect("/");
}

export async function updateProfileAction(_, formData) {
  const name = formData.get("name");
  const id = formData.get("id");

  //const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.update({
	  where: {
		  id,
	  }, 	
      data: {
        name,
        
      },
    });
    
    

    return {
      status: "success",
      message: "User update success",
    };
    
    
    
  } catch (error) {
    return {
      status: "error",
      message: "User update failed",
    };
  }
  
  
}
