import React, { useMemo } from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import InputNode from "./nodes/InputNode";
import ResultNode from "./nodes/ResultNode";

const FlowCanvas = ({ prompt, setPrompt, result }) => {
  const nodes = useMemo(() => [
    {
      id: "1",
      type: "inputNode",
      position: { x: 100, y: 100 },
      data: { prompt, setPrompt },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 450, y: 100 },
      data: { result },
    },
  ], [result]);

  const edges = useMemo(() => [
    { id: "e1-2", source: "1", target: "2", animated: true },
  ], []);

  return (
    <div className="flow-wrapper">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{
          inputNode: InputNode,
          resultNode: ResultNode,
        }}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowCanvas;