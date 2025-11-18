"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function editSnippet(id: number, code: string) {
  await db.snippets.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function createSnippets(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  return {
    message: "Title must be longer",
  };

  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log(snippet);
  revalidatePath("/");
  redirect("/");
}
