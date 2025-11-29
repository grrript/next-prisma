import ISnippetsGateway from "./SnippetsGateway";
import snippetsRepository from "./SnippetsRepository";
import { CallbackVm, Snippet, SnippetSummary } from "./types";

export default class SnippetsPresenter {
  getSnippets: ISnippetsGateway["getSnippets"];
  constructor(getSnippets: ISnippetsGateway["getSnippets"]) {
    this.getSnippets = getSnippets;
  }
  load = async (callback: CallbackVm) => {
    await snippetsRepository.getSnippets((snippetsPm: Snippet[]) => {
      // @note: transform repository into a viewModel.
      // For this example, we just remove the property called "code"
      // since that is not needed by the viewModel
      const snippetsVm: SnippetSummary[] = snippetsPm.map((snippetPm) => {
        return { title: snippetPm.title, id: snippetPm.id };
      });

      callback(snippetsVm); // note: this will not scale well
    }, this.getSnippets);
  };
}
