import type { Snippet } from "@/../generated/prisma/client";
import Observable from "./Observable";
import * as action from "@/snippet/actions";

class SnippetsRepository {
  snippetsPm: Observable;

  constructor() {
    this.snippetsPm = new Observable([]);
  }

  getBooks = async (callback: any) => {
    this.snippetsPm.subscribe(callback);
    await this.loadApiData();
  };
  loadApiData = async () => {
    const snippetsDto: Snippet[] = await action.getSnippets();
    const snippets = snippetsDto.map((snippetDto) => {
      // Note: usually some major data transformation here
      return snippetDto;
    });

    this.snippetsPm.value = snippets;
    this.snippetsPm.notify();
  };
  refreshModelData = () => {
    // this code is kinda silly but am leaving it here for now
    this.snippetsPm.value = this.snippetsPm.value.map((pm: Snippet) => {
      return pm;
    });
    this.snippetsPm.notify();
  };
}

const snippetsRepository = new SnippetsRepository();

export default snippetsRepository;
