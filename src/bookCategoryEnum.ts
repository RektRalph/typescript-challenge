/**
 * 這個 Enum 的目的是定義書籍的類別。
 * 在 TypeScript 中，我們可以使用 Enum 來定義一組具名的常數，這裡我們定義了 Novel、Poetry 和 Biography 三種類別。
 *
 * 範例:
 * BookCategory.Novel 代表小說類別
 * BookCategory.Poetry 代表詩歌類別
 * BookCategory.Biography 代表傳記類別
 */
/**
 * The purpose of this enum is to define the category of books.
 * In TypeScript, we can use Enum to define a set of famous constants. Here we define Novel, POETRY, and Biography.
 *
 * Example:
 * BOOKCategory.novel represents the novel category
 * BOOKCategory.poetry represents poetry category
 * BOOKCategory.biography represents biography category
 */

/**
 * 這個函式的目的是根據輸入的書籍類別返回對應的描述。
 * 你需要使用 TypeScript 的 Enum 來定義書籍的類別，並在函式中返回對應的描述。
 * Enum 應該包含 Novel、Poetry 和 Biography 三種類別，並分別對應到 '小說'、'詩歌' 和 '傳記' 三個字串。
 *
 * 範例:
 * 輸入: BookCategory.Novel
 * 輸出: 'Book category: Novel'
 */
/**
 * The purpose of this function is to return the corresponding description based on the input book category.
 * You need to use the enum of TypeScript to define the category of books and return the corresponding description in the function.
 * ENUM should include three categories: Novel, POETRY, and Biography, and correspond to the three string of 'novel', 'poetry' and 'biography'.
 *
 * Example:
 * Enter: BookCategory.Novel
 * Output: 'Book category: Novel'
 */

export enum BookCategory {
  Novel = "Novel",
  Science = "Science",
  Education = "Education",
}
export function getBookCategory(category: BookCategory) {
  return `Book category: ${category}`;
}
