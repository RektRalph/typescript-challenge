/**
 * The purpose of this function is to print the students' name and score correctly.
 * You need to use JavaScript's string to combine the student's name and score into a string.
 * And try to define it in the parameter in the parameter
 * Example:
 * 輸入: ['Alice', 85]
 * 輸出: 'Alice: 85%'
 */

export function printStudentInfo(student: [string, number]) {
  const [name, score] = student;

  return `${name}: ${score}%`;
}
