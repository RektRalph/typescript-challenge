/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 *
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 *
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 *
 * 輸入: []
 * 輸出: 0
 */
/**
 * Calculate the sum of the digital array
 * @param Numbers -Calculate the sum of the digital array
 *
 * Example:
 * Enter: [1, 2, 3, 4, 5]
 * Output: 15
 *
 * Enter: [-1, -2, -3]
 * Output: -6
 *
 * Enter: []
 * Output: 0
 */
export function arraySum(numbers: number[]): number {
  // using reduce
  return numbers.reduce((a, b) => a + b, 0);

  // using for...of
  // let sum = 0;

  // for (let number of numbers) {
  //   sum += number;
  // }
  // return sum;
}
