import express from "express";
import { askAiController, savePromptController,} from "../controllers/aiController.js";

const router = express.Router();

router.post("/ask-ai", askAiController);
router.post("/save", savePromptController);

export default router;