import * as actions from "@/snippet/actions";

export default class SnippetsGateway {
  getSnippets = async () => {
    return actions.getSnippets();
  };
  getSnippet = async (id: number) => {
    return actions.getSnippet(id);
  };
  updateSnippet = async (id: number, code: string) => {
    return actions.updateSnippet(id, code);
  };
}
