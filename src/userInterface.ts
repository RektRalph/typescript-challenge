/**
 * The user interface has been removed, and you need to define a new user interface yourself.
 * User interface should contain two attributes: firstName and LastName, both of which are string types.
 */

/**
 * Get the full name of the user
 * @param user - User objects should include two attributes: firstName and LastName
 *
 * 範例:
 * 輸入: { firstName: 'John', lastName: 'Doe' }
 * 輸出: 'John Doe'
 */
export function getFullName(user: { firstName: string; lastName: string }) {
  return `${user.firstName} ${user.lastName}`;
}
