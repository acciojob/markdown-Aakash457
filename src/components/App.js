import React, { useState, useEffect } from "react";
import MarkdownEditor from "./MarkdownEditor";
import "../styles/App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="app">
      <MarkdownEditor markdown={markdown} setMarkdown={setMarkdown} />
    </div>
  );
}

export default App;
