/**
 * Decision Engine
 * ----------------
 * Analiza un mensaje y determina el nivel de atención (1, 2 o 3)
 * combinando reglas rápidas y análisis con IA.
 */

import { analyzeWithAI } from "../services/ai.service.js";
import { normalizeText } from "../utils/normalize.js";

export async function decisionEngine(message, history = []) {
  const text = normalizeText(message);

  const score = {
    urgency: 0,
    frustration: 0,
    complexity: 0
  };

  // 🔹 Reglas básicas
  if (text.includes("urgente")) score.urgency += 2;
  if (text.includes("ya")) score.urgency += 1;

  if (text.includes("no sirve")) score.frustration += 2;
  if (text.includes("otra vez")) score.frustration += 2;

  if (text.includes("retiro") || text.includes("dinero")) {
    score.complexity += 2;
  }

  if (history.length > 3) {
    score.frustration += 1;
  }

  const baseTotal =
    score.urgency + score.frustration + score.complexity;

  let aiResult = null;

  // 🧠 Solo usamos IA si hace falta
  if (baseTotal >= 2) {
    try {
      aiResult = await analyzeWithAI(message);
    } catch (error) {
      console.error("AI error:", error.message);
    }
  }

  let total = baseTotal;

  if (aiResult && isValidAI(aiResult)) {
    total += aiResult.urgency + aiResult.complexity;

    if (aiResult.sentiment === "angry") {
      total += 2;
    }
  }

  // 🎯 Nivel final
  let level = 1;
  if (total > 2 && total <= 6) level = 2;
  if (total > 6) level = 3;

  return {
    level,
    total,
    score,
    ai: aiResult || null
  };
}

/**
 * Valida que la respuesta de la IA tenga la estructura correcta
 */
function isValidAI(data) {
  return (
    data &&
    typeof data.intent === "string" &&
    typeof data.urgency === "number" &&
    typeof data.complexity === "number" &&
    ["calm", "neutral", "angry"].includes(data.sentiment)
  );
}
