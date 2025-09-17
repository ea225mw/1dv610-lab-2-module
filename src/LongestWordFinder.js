/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

import { Helper } from "./Helper.js"

/**
 * Represents a word finder that finds the longest word in a text/string.
 */
export class LongestWordFinder {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  /**
   * Finds the longest word(s) in a string.
   * 
   * @param {string} string  - The string in which to find the longest word.
   */
  findLongestWord(string) {
    this.#helper.validateInput(string)

    const cleanedString = this.#removeNonLetters(string)
    const splittedStringArray = this.#helper.splitOnWhitespace(cleanedString)
    const sortedArray = this.#sortArrayDescending(splittedStringArray)
    this.#deleteEmptyElements(sortedArray)
    const onlyLongestWordsArray = this.#removeAllWordsExceptLongest(sortedArray)
    const onlyUniqueWords = this.#createArrayWithUniqueLongestWords(onlyLongestWordsArray)

    return this.#createReturnObject(onlyUniqueWords)
  }

  #removeNonLetters(string) {
    const regExp = /[\.,:;!\?\/\-\–\*\+"”`'\(\)\[\]\{\}#0123456789]/g

    return string.replaceAll(regExp, ' ')
  }

  #sortArrayDescending(array) {
    return array.sort((a, b) => b.length - a.length)
  }

  #deleteEmptyElements(array) {
    return array.filter((element) => element.length > 0)
  }

  #removeAllWordsExceptLongest(array) {
    return array.filter((element) => element.length === array[0].length)
  }

  #createArrayWithUniqueLongestWords(array) {
    const set = new Set
    array.forEach((element) => set.add(element.toLowerCase()))
    return Array.from(set)
  }

  #createReturnObject(set) {
    return { numberOfLetters: set[0].length, words: Array.from(set) }
  }
}

// export { validateInput, splitOnWhitespace, findLongestWord, sortDescending, deleteEmptyElements, createArrayWithUniqueLongestWords }