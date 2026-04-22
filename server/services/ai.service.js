import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

/**
 * Analiza el mensaje usando IA
 */
export async function analyzeWithAI(message) {
  const response = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content: `
Eres un sistema de análisis para soporte de un casino.

Debes analizar el mensaje del usuario y responder SOLO en formato JSON válido, sin texto extra.

Formato:
{
  "intent": "payment_issue | general_question | complaint | other",
  "urgency": number (0 a 3),
  "complexity": number (0 a 3),
  "sentiment": "calm | neutral | angry"
}
`
      },
      {
        role: "user",
        content: message
      }
    ]
  });

  const content = response.choices[0].message.content;

  try {
    return JSON.parse(content);
  } catch (error) {
    throw new Error("Error parseando respuesta de IA");
  }
}
