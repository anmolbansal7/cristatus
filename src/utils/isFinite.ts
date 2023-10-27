/**
 * @name isFinite
 * @description Checks if a value is a finite number.
 * @param value The value to check.
 * @returns True if the value is a finite number, false otherwise.
 *
 * A number is considered finite if it is not `Infinity`, `-Infinity`, or `NaN`.
 *
 * @example
 * const isFiniteNumber = isFinite(10); // true
 *
 * const isInfiniteNumber = isFinite(Infinity); // false
 */

function isFinite(value: unknown): boolean {
  return typeof value === "number" && Number.isFinite(value);
}

export default isFinite;
