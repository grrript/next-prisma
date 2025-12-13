import Observable from "../Observable";
import ISnippetsGateway from "../../infrastructure/SnippetsGateway";
import { CallbackPm, Snippet } from "../../domain/snippet";

class SnippetsRepository {
  snippetsPm: Observable;

  constructor() {
    this.snippetsPm = new Observable([]);
  }

  getSnippets = async (
    callback: CallbackPm,
    snippetsApi: ISnippetsGateway["getSnippets"]
  ) => {
    this.snippetsPm.subscribe(callback);
    await this.loadApiData(snippetsApi);
  };
  loadApiData = async (snippetsApi: ISnippetsGateway["getSnippets"]) => {
    const snippetsDto: Snippet[] = await snippetsApi();

    const snippets = snippetsDto.map((snippetDto) => {
      // @Note: usually some major data transformation here
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
