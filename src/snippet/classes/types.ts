import type { Snippet as PrismaSnippet } from "@/../generated/prisma/client";

export type Snippet = PrismaSnippet;

export interface ISnippetsGateway {
  getSnippets: Promise<Snippet[]>;
}

export type SnippetSummary = Omit<Snippet, "code">;

export type CallbackVm = (param: SnippetSummary[]) => void;
export type CallbackPm = (param: Snippet[]) => void;
