"use client";

import type { Snippet } from "@/../generated/prisma/client";
import * as actions from "@/snippet/actions";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";

export default function SnippetEditForm(props: Snippet) {
  const [code, setCode] = useState(props.code);

  const handleChange = (value: string = "") => {
    setCode(value);
  };

  const onSubmit = actions.editSubmit.bind(null, props.id, code);

  return (
    <div>
      <form action={onSubmit}>
        <Editor
          height="30vh"
          theme="vs-dark"
          language="typescript"
          defaultValue={props.code}
          options={{ minimap: { enabled: false } }}
          onChange={handleChange}
        />

        <button
          disabled={props.code === code}
          type="submit"
          className="border rounded px-3 py-2 my-6 hover"
        >
          Save
        </button>
      </form>
    </div>
  );
}
