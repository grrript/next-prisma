import SnippetsPresenter from "../../snippet/classes/SnippetsPresenter";
import Link from "next/link";
import ChildComponent from "@/snippet/components/childComponent";
import SnippetsGateway from "../../snippet/classes/SnippetsGateway";
import { SnippetSummary } from "@/snippet/classes/types";

export default async function SnippetsHome() {
  const getSnippets = new SnippetsGateway().getSnippets;

  const snippetsPresenter = new SnippetsPresenter(getSnippets);

  let vm: SnippetSummary[] | null = null;

  await snippetsPresenter.load((generatedVM: SnippetSummary[]) => {
    vm = generatedVM;
  });

  return (
    <div className="px-10 py-4">
      <h1 className="text-2xl py-6">Snippets Observable</h1>
      <div>
        {vm!.map((m, i) => {
          return (
            <div key={i} className="py-2">
              <Link href={`snippets-obs/${m.id}`}>{m.title}</Link>
            </div>
          );
        })}
      </div>
      <div>Client side Child Component</div>
      <ChildComponent />
    </div>
  );
}
