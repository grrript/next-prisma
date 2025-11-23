"use client";

import * as actions from "@/snippet/actions";
import { useActionState, startTransition } from "react";

export default function AddSnippet() {
  const [formState, action] = useActionState(actions.createSnippet, {
    message: "",
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(() => {
      action(formData);
    });
  }

  return (
    <div className="container mx-auto px-12">
      {formState.message ? (
        <div className="p-4 bg-red-200 border rounded border-red-400 text-red-700">
          {formState.message}
        </div>
      ) : null}
      <form onSubmit={handleSubmit}>
        <h3 className="py-10">Create a New Snippet</h3>

        <div className="flex gap-4 p-2">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4 p-2">
          <label htmlFor="code">Code</label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="py-8">
          <button type="submit" className="border rounded px-4 py-2">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
