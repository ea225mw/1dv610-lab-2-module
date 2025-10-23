/**
 * @author Emanuel Andersen <ea225mw@student.lnu.se>
 */

export class Helper {
  validateAndPrepareString(string) {
    this.validateInput(string)
    const cleanedString = this.#removeNonLetters(string)
    return this.splitOnWhitespace(cleanedString)
  }

  validateInput(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string.')
    }
  }

  #removeNonLetters(string) {
    const regExp = /[\.,:;!\?\/\-\–\*\+"”`'\(\)\[\]\{\}\\#0123456789%=&]/g
    return string.replaceAll(regExp, ' ')
  }

  splitOnWhitespace(string) {
    return string.trim().split(/\s+/)
  }

  checkPhraseArgument(phrase) {
    if (typeof phrase !== 'string') throw new Error('Second argument must be a string.')
  }
}