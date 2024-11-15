/**
 * The interface to be done has been removed, and you need to define a new to -do interface yourself.
 * The interface to be handled should include three properties: ID, task, and complety,
 *  which are digital types, string types, and Bollinger types, respectively.
 */

/**
 * Newly added
 * @param todos - The existing item array
 * @param task - The content of new matters
 *
 * example:
 * enter: ([{ id: 1, task: 'Buy milk', completed: false }], 'Walk the dog')
 * Output: [{ id: 1, task: 'Buy milk', completed: false }, { id: 2, task: 'Walk the dog', completed: false }]
 */
interface Todo {
  id: number;
  task: string;
  completed: boolean;
}
export function addTodo(todos: Todo[], task: string): Todo[] {
  const newTodo = { id: todos.length + 1, task, completed: false };
  return [...todos, newTodo];
}
