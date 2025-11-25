import SnippetsRepository from "./SnippetsRepository";
import type { Snippet } from "@/../generated/prisma/client";

export default class SnippetsPresenter {
  load = async (callback: any) => {
    console.log("rocks server01a");
    const snippetsRepository = new SnippetsRepository();

    await snippetsRepository.getBooks((snippetsPm: Snippet[]) => {
      console.log("rocks2: ", snippetsPm);

      const snippetsVm = snippetsPm.map((snippetPm) => {
        return { title: snippetPm.title, id: snippetPm.id };
      });

      callback(snippetsVm); // note: this will not scale well
    });
  };
}
