import React from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor({ markdown, setMarkdown }) {
  return (
    <div className="editor-container">
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write Markdown here..."
      />

      <div className="preview">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
