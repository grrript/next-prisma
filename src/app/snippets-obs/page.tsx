import React from "react";
import SnippetsPresenter from "./SnippetsPresenter";
import { Snippet } from "../../../generated/prisma/client";
import Link from "next/link";

export default async function SnippetsHome() {
  const snippetsPresenter = new SnippetsPresenter();
  // const [vm, setVm] = React.useState<Snippet[]>();

  //   React.useEffect(() => {
  //     async function load() {
  //       await snippetsPresenter.load((vm) => {
  //         setVm(vm);
  //       });
  //     }
  //     load();
  //   }, []);

  let vm: Snippet[] | null = null;

  await snippetsPresenter.load((generatedVM: Snippet[]) => {
    vm = generatedVM;
    console.log("rocks90: ", vm);
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
    </div>
  );
}
