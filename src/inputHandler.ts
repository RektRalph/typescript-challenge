/**
* The purpose of this function is to return the corresponding description based on the input type.
 * You need to use the combination type of TypeScript to define the input can be a string or number, and return the corresponding description in the function.
 The return value of the function should be a string, which describes the type and value of the input.
 * 
 * example:
 * enter: 'Hello'
 * Output: 'Input is a string: Hello'
 * 
 * enter: 123
 * Output: 'Input is a number: 123'
 */

export function handleInput(input: string | number): string {
  if (typeof input === "string") {
    return `Input is a string: ${input}`;
  } else if (typeof input === "number") {
    return `Input is a number: ${input}`;
  } else {
    return "Input is not a string or a number";
  }
}
