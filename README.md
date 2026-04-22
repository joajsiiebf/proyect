# AI Casino Support System

## Descripción
Sistema de atención al cliente basado en inteligencia artificial que utiliza un modelo de decisión multinivel para analizar mensajes y determinar cómo deben ser gestionados. El sistema evalúa intención, urgencia y complejidad del mensaje para responder automáticamente o escalar a un asesor humano.

## Cómo funciona
El usuario envía un mensaje, el sistema analiza el contenido combinando reglas e inteligencia artificial, asigna un nivel de atención y genera una respuesta automática o decide escalar el caso a un asesor.

## Niveles de atención
Nivel 1: Respuestas rápidas para consultas simples. Nivel 2: Respuestas con contexto y mayor precisión. Nivel 3: Casos complejos o sensibles con posible intervención humana.

## Arquitectura
El sistema se compone de un Decision Engine que analiza el mensaje, un AI Service que interpreta y genera respuestas, un Router que decide cómo responder y una API que recibe y devuelve los mensajes.

## Tecnologías
Node.js, Express y OpenAI API.

## Uso básico
Se envía un mensaje al endpoint POST /message con un formato como: { "message": "no me llega el retiro urgente" }. El sistema responde con una estructura que incluye la decisión tomada y la respuesta generada, indicando el nivel y si fue atendido por IA o escalado.

## Configuración
Se debe crear un archivo .env basado en .env.example incluyendo la clave: OPENAI_KEY=tu_api_key.

## Estado del proyecto
Estructura base funcional lista para desarrollo, pruebas e implementación.

## Objetivo
Optimizar la atención al cliente, reducir la carga operativa del equipo humano y mejorar la experiencia del usuario mediante un sistema inteligente de toma de decisiones.
