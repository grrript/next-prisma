import { db } from "@/db";
import { redirect } from "next/navigation";

const add = (a: number, b: number) => {
  return a + b;
};

export default function AddSnippet() {
  async function createSnippet(formData: FormData) {
    "use server";

    console.log(formData.get("title"));
    console.log(formData.get("code"));
    const snippet = await db.snippet.create({
      data: {
        title: formData.get("title") as string,
        code: formData.get("code") as string,
      },
    });
    console.log(snippet);
    await db.$disconnect();
    redirect("/");
  }
  console.log(process.env.DATABASE_URL);
  console.log("rocks01");
  return (
    <div className="container mx-auto px-12">
      <form action={createSnippet}>
        <h3 className="py-10">Create a New Snippet</h3>

        <div className="flex gap-4 p-2">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4 p-2">
          <label htmlFor="code">Code</label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="py-8">
          <button type="submit" className="border rounded px-4 py-2">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
