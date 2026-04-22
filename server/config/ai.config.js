/**
 * Configuración de IA por niveles
 * Cada nivel usa un modelo diferente según complejidad
 */

export const AI_CONFIG = {
  level1: {
    model: "gpt-4.1-mini",
    temperature: 0.1,
    prompt: `
Responde preguntas simples de soporte de casino.
Sé directo, claro y breve.
`
  },

  level2: {
    model: "gpt-4.1-mini",
    temperature: 0.2,
    prompt: `
Eres un asistente de soporte de casino.

Responde de forma clara, útil y contextual.
Explica soluciones de forma sencilla.
`
  },

  level3: {
    model: "gpt-4.1",
    temperature: 0.3,
    prompt: `
Eres un agente experto en soporte de casino.

Responde con empatía, precisión y profesionalismo.
El cliente puede estar molesto, así que debes calmar y resolver.
`
  },

  analysis: {
    model: "gpt-4.1-mini",
    temperature: 0.2,
    prompt: `
Analiza el mensaje del usuario y responde SOLO en JSON válido:

{
  "intent": "payment_issue | general_question | complaint | other",
  "urgency": number (0 a 3),
  "complexity": number (0 a 3),
  "sentiment": "calm | neutral | angry"
}
`
  }
};
