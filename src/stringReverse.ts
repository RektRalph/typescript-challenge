/**
 * 反轉輸入的字串
 * @param str - 要反轉的字串
 *
 * This function needs to reverse the input string. You can use JavaScript's String and Array methods to complete this task.
 * First, use the Split method to convert the string into a character array. Then use the Reverse method to reverse the array.
 * Finally, use the Join method to convert the reversed array back.
 */
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
