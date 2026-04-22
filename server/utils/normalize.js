/**
 * Normaliza el texto para mejorar la detección
 * - Pasa todo a minúsculas
 * - Quita tildes
 * - Elimina símbolos raros
 */

export function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD") // separa letras y tildes
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .replace(/[^\w\s]/gi, "") // elimina símbolos
    .trim();
}
