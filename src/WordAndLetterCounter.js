/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

import { Helper } from './Helper.js'

export class WordAndLetterCounter {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  countWords(string) {
    const splittedString = this.#helper.splitOnWhitespace(string)
    return splittedString.length
  }

  countLetters(string) {
    const splittedString = this.#helper.splitOnWhitespace(string)
    let numberOfLetters = 0
    for (const word of splittedString) {
      numberOfLetters += word.length
    }
    return numberOfLetters
  }
}