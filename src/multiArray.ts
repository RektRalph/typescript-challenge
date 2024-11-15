/**
 * The purpose of this function is to double each element of the two -dimensional array.
 * You need to use JavaScript 的 Array.prototype.map Methods to achieve this function.
 * Note: The original parameter definition is wrong, and the parameters should be defined as a two -dimensional digital array. 
 * In addition, the return value of the function should also be a two -dimensional digital array.
 * 
 * example:
 * enter: [[1, 2], [3, 4], [5, 6]]
 * Output: [[2, 4], [6, 8], [10, 12]]
 */

export function processMultiArray(arr: number[][]) {
  return arr.map(subArr => subArr.map(num => num * 2));
}
