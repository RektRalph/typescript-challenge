/**
 * Find the maximum number in the number array
 * @param numbers - Find out the maximum number of numbers
 *
 * This function needs to find the maximum number in the input digital array. You can use JavaScript of Math.max
 * Methods and expand operators (...) to complete this task。
 * Math.max Methods can accept multiple parameters and return the maximum value.
 * Expand operational symbols can convert one array into multiple parameters.
 */
export function findMaxNumber(numbers: number[]): number {
  return Math.max(...numbers);
}
