/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

import { Helper } from "./Helper.js"

export class WordLengthFinder {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  /**
   * Finds the longest word(s) in a string.
   * 
   * @param {string} string - The string in which to find the longest word.
   * @returns {object} - An object specifying numberOfLetters and an array with the word(s) with that amount of letters.
   */
  findLongestWord(string) {
    const arrayOfPreparedWords = this.#prepareString(string)

    const sortedArray = this.#sortArrayDescending(arrayOfPreparedWords)
    this.#deleteEmptyElements(sortedArray)
    const onlyLongestWordsArray = this.#keepOnlyUsefulWords(sortedArray)
    const onlyUniqueWords = this.#createArrayWithUniqueUsefulWords(onlyLongestWordsArray)

    return this.#createReturnObject(onlyUniqueWords)
  }

  /**
   * Finds the shortest word(s) in a string.
   * 
   * @param {string} string - The string in which to find the shortest word.
   * @returns {object} - An object specifying numberOfLetters and an array with the word(s) with that amount of letters.
   */
  findShortestWord(string) {
    const arrayOfPreparedWords = this.#prepareString(string)

    const sortedArray = this.#sortArrayAscending(arrayOfPreparedWords)
    this.#deleteEmptyElements(sortedArray)
    const onlyShortestWordsArray = this.#keepOnlyUsefulWords(sortedArray)
    const onlyUniqueWords = this.#createArrayWithUniqueUsefulWords(onlyShortestWordsArray)

    return this.#createReturnObject(onlyUniqueWords)
  }

  #prepareString(string) {
    this.#helper.validateInput(string)
    const cleanedString = this.#removeNonLetters(string)
    return this.#helper.splitOnWhitespace(cleanedString)
  }

  #removeNonLetters(string) {
    const regExp = /[\.,:;!\?\/\-\–\*\+"”`'\(\)\[\]\{\}#0123456789]/g
    return string.replaceAll(regExp, ' ')
  }

  #sortArrayDescending(array) {
    return array.sort((a, b) => b.length - a.length)
  }

  #sortArrayAscending(array) {
    return array.sort((a, b) => a.length - b.length)
  }

  #deleteEmptyElements(array) {
    return array.filter((element) => element.length > 0)
  }

  #keepOnlyUsefulWords(array) {
    return array.filter((element) => element.length === array[0].length)
  }

  #createArrayWithUniqueUsefulWords(array) {
    const set = new Set
    array.forEach((element) => set.add(element.toLowerCase()))
    return Array.from(set)
  }

  #createReturnObject(set) {
    return { numberOfLetters: set[0].length, words: Array.from(set) }
  }
}


/**
 * Finds the longest word(s) in a string.
 * 
 * @param {string} string - The string in which to find the longest word.
 */