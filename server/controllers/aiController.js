import { askAI } from "../services/openrouter.js";
import Prompt from "../models/Prompt.js";

export const askAiController = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }

    const aiResponse = await askAI(prompt);

    res.json({ response: aiResponse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const savePromptController = async (req, res) => {
  try {
    const { prompt, response } = req.body;

    const saved = await Prompt.create({ prompt, response });

    res.json({ message: "Saved successfully", data: saved });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};