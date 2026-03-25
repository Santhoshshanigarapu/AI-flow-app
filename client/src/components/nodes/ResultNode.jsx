import { Handle, Position } from "reactflow";

const ResultNode = ({ data }) => {
  return (
    <div className="node result-node">
      <div className="result-text">
        {data.result || "Result will appear here..."}
      </div>
      <Handle type="target" position={Position.Left} />
    </div>
  );
};

export default ResultNode;