import SnippetsPresenter from "@/snippet/classes/SnippetsPresenter";
import { Snippet, SnippetSummary } from "@/snippet/classes/types";

// stub
const getSnippets = () =>
  new Promise<Snippet[]>((res, rej) => {
    res([
      { id: 1, title: "Add", code: "Add()" },
      { id: 2, title: "Subtract", code: "Subtract()" },
    ]);
  });

describe("Snippets", () => {
  let vm: SnippetSummary[] | null = null;

  beforeEach(async () => {
    const snippetsPresenter = new SnippetsPresenter(getSnippets);

    await snippetsPresenter.load((generatedVM: SnippetSummary[]) => {
      vm = generatedVM;
    });
  });
  it("shows a list of snippets", async () => {
    expect(vm).toHaveLength(2);
  });

  it("shows first item is Add", () => {
    if (vm) {
      expect(vm[0].title).toBe("Add");
    }
  });
});
