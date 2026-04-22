import express from "express";
import bodyParser from "body-parser";

import { decisionEngine } from "./core/decision.engine.js";
import { router } from "./core/router.js";

const app = express();
app.use(bodyParser.json());

/**
 * Endpoint principal
 */
app.post("/message", async (req, res) => {
  const { message } = req.body;

  try {
    // 🧠 Analiza el mensaje
    const decision = await decisionEngine(message, []);

    // 🔄 Decide cómo responder
    const response = await router(decision, message);

    res.json({
      decision,
      response
    });
  } catch (error) {
    res.status(500).json({
      error: "Error procesando mensaje"
    });
  }
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
