import OpenAI from "openai";
import { AI_CONFIG } from "../config/ai.config.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

/**
 * 🧠 IA DE ANÁLISIS (NO CAMBIA)
 */
export async function analyzeWithAI(message) {
  const config = AI_CONFIG.analysis;

  const response = await openai.chat.completions.create({
    model: config.model,
    temperature: config.temperature,
    messages: [
      { role: "system", content: config.prompt },
      { role: "user", content: message }
    ]
  });

  const content = response.choices[0].message.content;

  try {
    return JSON.parse(content);
  } catch {
    throw new Error("Invalid AI JSON");
  }
}

/**
 * 
 * Usa un modelo diferente según el nivel
 */
export async function generateResponse(level, message) {
  let config;

  // 🔥 Aquí decides qué modelo usar
  if (level === 1) {
    config = AI_CONFIG.level1;
  } else if (level === 2) {
    config = AI_CONFIG.level2;
  } else {
    config = AI_CONFIG.level3;
  }

  const response = await openai.chat.completions.create({
    model: config.model,
    temperature: config.temperature,
    messages: [
      { role: "system", content: config.prompt },
      { role: "user", content: message }
    ]
  });

  return response.choices[0].message.content;
}
