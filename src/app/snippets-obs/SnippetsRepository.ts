import { db } from "@/db";
import type { Snippet } from "@/../generated/prisma/client";
import Observable from "./Observable";
import * as action from "@/snippet/actions";

class SnippetsRepository {
  programmersModel: Observable;

  constructor() {
    this.programmersModel = new Observable([]);
  }

  getBooks = async (callback: any) => {
    this.programmersModel.subscribe(callback);
    await this.loadApiData();
  };
  loadApiData = async () => {
    const snippetsDto: Snippet[] = await action.getSnippets();
    const snippets = snippetsDto.map((snippetDto) => {
      // Note: usually some major data transformation here
      return snippetDto;
    });
    console.log("rocks server01a", snippets);

    this.programmersModel.set(snippets);
  };
}

//const snippetsRepository = new SnippetsRepository();

export default SnippetsRepository;
