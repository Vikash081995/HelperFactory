/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Editor from "@monaco-editor/react";

import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: {
    code: any;
    title: any;
    id: any;
  };
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  return (
    <div>
      Client component has snippet with title {snippet.title}
      <Editor
        height="40vh"
        language="javascript"
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
