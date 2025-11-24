"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SNIPPET_HOME } from "../constants";

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({ where: { id } });
  revalidatePath(SNIPPET_HOME);
  redirect(`/`);
};

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title");
  const code = formData.get("code");

  //error handling from server
  try {
    if (typeof title !== "string" || title.length < 3) {
      return { message: "Title must be longer." };
    }

    if (typeof code !== "string" || code.length < 8) {
      return { message: "Code must be longer." };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    revalidatePath(SNIPPET_HOME);
  } catch (err) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something went wrong." };
    }
  }
  redirect("/"); // must never be inside a try block or the catch block always be triggered
}
