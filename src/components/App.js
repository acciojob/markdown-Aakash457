import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import '../styles/App.css';

function App() {
  const [markdown, setMarkdown] = useState("# Start typing markdown...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="app">
      <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      <ReactMarkdown className="preview">
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default App;
