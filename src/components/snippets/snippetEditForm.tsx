"use client";

import type { Snippet } from "@/../generated/prisma/client";

export default function SnippetEditForm(props: Snippet) {
  return (
    <div>
      <textarea
        className="bg-gray-900 py-12 px-6 border rounded border-gray-300 w-full"
        defaultValue={props.code}
      />
      <button className="border rounded px-3 py-2 my-6 hover">Save</button>
    </div>
  );
}
