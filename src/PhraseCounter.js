/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

export class PhraseCounter {
  #helper

  constructor(helper) {
    this.#helper = helper
  }

  /**
   * Counts the occurane of a specified phrase.
   *
   * @param {string} string - The string in which to search for phrase.
   * @param {string} phrase - The phrase to search for. Can be one or many letters.
   * @returns {number} - The number of phrase occurances.
   */
  countSpecifiedPhrase(string, phrase) {
    try {
      this.#helper.validateInput(string)
      this.#helper.checkPhraseArgument(phrase)
      return this.#findSpecifiedPhrase(string, phrase)
    } catch (error) {
      return error
    }
  }

  #findSpecifiedPhrase(string, phrase) {
    const regExp = new RegExp(phrase, 'g')
    const array = [...string.matchAll(regExp)]
    return array.length
  }
}
