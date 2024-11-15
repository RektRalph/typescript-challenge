/**
 * Add two numbers
 * @param a - First number
 * @param b - Second number
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * 將兩個數字相減
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * 將兩個數字相乘
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function multiply(a: number, b: number): number {
  return a * b;
}

/**
 * 將兩個數字相除
 * @param a - 第一個數字
 * @param b - 第二個數字
 */
export function divide(a: number, b: number): number {
  if (a && b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

/**
 * Implement the addition function, the result cannot exceed more than 100。
 *
 * @param a 第一個加數。
 * @param b 第二個加數。
 * @returns The sum of the two numbers, but not exceeded 100。
 */
export function add100(a: number, b: number): number {
  const sum = add(a, b);
  return Math.min(sum, 100);
}
