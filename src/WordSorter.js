/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

export class WordSorter {
  #helper

  constructor(helper) {
    this.#helper = helper
  }
  /**
   * Sorts the word in a string in alphbetical order, ascending.
   *
   * @param {string} string - The string to sort.
   * @returns {array} - An array with sorted words.
   */
  sortWordsAscending(string) {
    try {
      const splittedWordsArray = this.#helper.validateAndPrepareString(string)
      return this.#sortInAscendingOrder(splittedWordsArray)
    } catch (error) {
      return error
    }
  }

  /**
   * Sorts the word in a string in alphbetical order, descending.
   *
   * @param {string} string - The string to sort.
   * @returns {array} - An array with sorted words.
   */
  sortWordsDescending(string) {
    try {
      const splittedWordsArray = this.#helper.validateAndPrepareString(string)
      return this.#sortInDescendingOrder(splittedWordsArray)
    } catch (error) {
      return error
    }
  }

  #sortInAscendingOrder(array) {
    return array.sort((a, b) => {
      const wordA = a.toUpperCase()
      const wordB = b.toUpperCase()

      if (wordA < wordB) return -1
      if (wordA > wordB) return 1
      else return 0
    })
  }

  #sortInDescendingOrder(array) {
    return array.sort((a, b) => {
      const wordA = a.toUpperCase()
      const wordB = b.toUpperCase()

      if (wordA < wordB) return 1
      if (wordA > wordB) return -1
      else return 0
    })
  }
}
