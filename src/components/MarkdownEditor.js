import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor({ markdown, setMarkdown }) {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />

      <div className="preview">
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
