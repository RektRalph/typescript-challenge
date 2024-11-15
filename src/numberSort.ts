/**
 * The purpose of this function is to sort a digital array.
 * You need to use JavaScript's array.prototype.sort method to implement this feature.
 * In the comparative function of the SORT method, you should return A -B to implement the sequence sorting.
 *
 * 範例:
 * 輸入: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
 * 輸出: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 */

export function sortNumbers(numbers: number[]): number[] {
  return numbers.sort((a, b) => a - b);
}
