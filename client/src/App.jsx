import { useState } from "react";
import FlowCanvas from "./components/FlowCanvas";
import { askAI, saveData } from "./services/api";
import "./styles/flow.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    if (!prompt) return alert("Enter prompt");

    try {
      setLoading(true);
      const res = await askAI(prompt);
      setResult(res.data.response);
    } catch (err) {
      alert("Error fetching AI response");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!prompt || !result) return alert("Nothing to save");

    await saveData({ prompt, response: result });
    alert("Saved successfully!");
  };

  return (
    <div className="app-container">
      <div className="title">AI Flow App</div>

      <div className="button-group">
        <button onClick={handleRun}>
          {loading ? "Running..." : "Run Flow"}
        </button>
        <button onClick={handleSave}>Save</button>
      </div>

      <FlowCanvas
        prompt={prompt}
        setPrompt={setPrompt}
        result={result}
      />
    </div>
  );
}

export default App;