import SnippetEditForm from "@/projects/snippet/components/snippetEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface ViewSnippetProps {
  params: Promise<{ id: string }>;
}
export default async function EditSnippet(props: ViewSnippetProps) {
  const { id } = await props.params;
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });

  if (!snippet) {
    return notFound();
  }
  return (
    <div className="container mx-auto px-12">
      <h3 className="py-10"> Edit a Snippet</h3>

      <div>
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold py-4">{snippet.title}</div>
        </div>

        <div className="py-6">
          <SnippetEditForm {...snippet} />
        </div>
      </div>
    </div>
  );
}
