import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/projects/snippet/infrastructure/actions";

interface ViewSnippetProps {
  params: Promise<{ id: string }>;
}
export default async function ViewSnippet(props: ViewSnippetProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

  const deleteSnippet = actions.deleteSnippet.bind(null, parseInt(id));

  if (!snippet) {
    return notFound();
  }
  return (
    <div className="container mx-auto px-12">
      <h3 className="py-10"> View a Snippet</h3>

      <div>
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold py-4">{snippet.title}</div>
          <div className="flex gap-4">
            <button className="border rounded px-3 py-2 cursor-pointer hover:bg-sky-800">
              <Link href={`/snippets/${snippet.id}/edit`}>Edit</Link>
            </button>
            <form action={deleteSnippet}>
              <button
                type="submit"
                className="border rounded px-3 py-2 cursor-pointer hover:bg-sky-800"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
        <pre className="bg-gray-700 p-6 border rounded border-gray-300">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => {
    return { id: snippet.id.toString() };
  });
}
