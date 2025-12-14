"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { SNIPPET_HOME, SNIPPET_HOME_OBS } from "../../constants";

export const getSnippets = async () => await db.snippet.findMany();

export const getSnippet = async (id: number) =>
  await db.snippet.findUnique({ where: { id } });

export const updateSnippet = async (id: number, code: string) => {
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
  revalidatePath(SNIPPET_HOME_OBS);
  redirect(SNIPPET_HOME);
};

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  const title = formData.get("title");
  const code = formData.get("code");

  //error handling from server
  // never throw an error like this
  // throw new Error("Something went wrong.")
  // because that will wipe out the page and just throw an error page.
  // You only want to return a message object/json
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
    revalidatePath(SNIPPET_HOME_OBS);
  } catch (err) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something went wrong." };
    }
  }
  redirect(SNIPPET_HOME); // must never be inside a try block or the catch block always be triggered
}
