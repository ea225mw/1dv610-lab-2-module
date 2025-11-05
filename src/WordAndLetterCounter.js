/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

import { Helper } from "./Helper.js";

export class WordAndLetterCounter {
  #helper;

  constructor() {
    this.#helper = new Helper();
  }

  /**
   * Counts the number of words in a string.
   *
   * @param {string} string  - The string in which to count words.
   * @returns {number}
   */
  countWords(string) {
    try {
      if (string === "") return 0;
      else {
        const splittedString = this.#helper.validateAndPrepareString(string);
        return splittedString.length;
      }
    } catch (error) {
      return error;
    }
  }

  /**
   * Counts the number of letters in a string.
   *
   * @param {string} string  - The string in which to count letters.
   * @returns {number}
   */
  countLetters(string) {
    try {
      const splittedString = this.#helper.validateAndPrepareString(string);
      let numberOfLetters = 0;
      for (const word of splittedString) {
        numberOfLetters += word.length;
      }
      return numberOfLetters;
    } catch (error) {
      return error;
    }
  }
}
