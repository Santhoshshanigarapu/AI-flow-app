import { generateResponse } from "../services/api";

const RunButton = () => {
  const handleRun = async () => {
    const prompt = "Hello AI";

    try {
      const res = await generateResponse(prompt);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className="run-btn" onClick={handleRun}>
      Run Flow
    </button>
  );
};

export default RunButton;