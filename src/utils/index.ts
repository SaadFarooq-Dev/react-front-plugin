/**
 * Generates a random integer between 1 and 100.
 * @returns A random integer between 1 and 100.
 */

export function generateRandomId(): number {
  return Math.floor(Math.random() * 50) + 1;
}
