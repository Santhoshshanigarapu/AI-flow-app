import { Handle, Position } from "reactflow";
import { useState, useEffect } from "react";

const InputNode = ({ data }) => {
  const [localValue, setLocalValue] = useState(data.prompt || "");

  useEffect(() => {
    setLocalValue(data.prompt);
  }, [data.prompt]);

  return (
    <div className="node input-node">
      <textarea
        placeholder="Enter prompt..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={() => data.setPrompt(localValue)} 
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default InputNode;