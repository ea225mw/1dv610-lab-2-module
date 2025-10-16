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
    const splittedString = this.#helper.prepareString(string)
    return splittedString.length
  }

  countLetters(string) {
    const splittedString = this.#helper.prepareString(string)
    let numberOfLetters = 0
    for (const word of splittedString) {
      numberOfLetters += word.length
    }
    return numberOfLetters
  }
}