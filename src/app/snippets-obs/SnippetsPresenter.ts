import snippetsRepository from "./SnippetsRepository";
import type { Snippet } from "@/../generated/prisma/client";

export default class SnippetsPresenter {
  load = async (callback: any) => {
    await snippetsRepository.getBooks((snippetsPm: Snippet[]) => {
      const snippetsVm = snippetsPm.map((snippetPm) => {
        return { title: snippetPm.title, id: snippetPm.id };
      });

      callback(snippetsVm); // note: this will not scale well
    });
  };
}
