/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

import { Helper } from "./Helper.js";

export class WordSorter {
  #helper

  constructor() {
    this.#helper = new Helper
  }
  /**
   * Sorts the word in a string in alphbetical order, ascending.
   * 
   * @param {string} string - The string to sort.
   * @returns {array} - An array with sorted words.
   */
  sortWordsAscending(string) {
    this.#helper.validateInput(string)
    const splittedWordsArray = this.#helper.splitOnWhitespace(string)
    return this.#sortInAscendingOrder(splittedWordsArray)
  }

  /**
   * Sorts the word in a string in alphbetical order, descending.
   * 
   * @param {string} string - The string to sort.
   * @returns {array} - An array with sorted words.
   */
  sortWordsDescending(string) {
    this.#helper.validateInput(string)
    const splittedWordsArray = this.#helper.splitOnWhitespace(string)
    return this.#sortInDescendingOrder(splittedWordsArray)
  }

  #sortInAscendingOrder(array) {
    return array.sort((a, b) => {
      const wordA = a.toUpperCase()
      const wordB = b.toUpperCase()

      if (wordA < wordB) {
        return -1
      }
      if (wordA > wordB) {
        return 1
      }
      return 0
    })
  }

  #sortInDescendingOrder(array) {
    return array.sort((a, b) => {
      const wordA = a.toUpperCase()
      const wordB = b.toUpperCase()

      if (wordA < wordB) {
        return 1
      }
      if (wordA > wordB) {
        return -1
      }
      return 0
    })
  }
}