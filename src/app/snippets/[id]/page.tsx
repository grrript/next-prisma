import { db } from "@/db";
import { notFound } from "next/navigation";

interface ViewSnippetProps {
  params: Promise<{ id: string }>;
}
export default async function ViewSnippet(props: ViewSnippetProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

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
            <button className="border rounded px-3 py-2 hover">Edit</button>
            <button className="border rounded px-3 py-2">Delete</button>
          </div>
        </div>
        <pre className="bg-gray-700 p-6 border rounded border-gray-300">
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}
