import { Helper } from './Helper.js'

export class PhraseCounter {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  countSpecifiedPhrase(string, phrase) {
    this.#helper.validateInput(string)
    this.#checkCharArgument(phrase)
    return this.#findSpecifiedPhrase(string, phrase)
  }

  #checkCharArgument(phrase) {
    if (typeof phrase !== 'string') throw new Error('Second argument must be a string.')
    // if (char.length !== 1) throw new Error('Only one character is allowed as second argument.')
  }

  #findSpecifiedPhrase(string, phrase) {
    const regExp = new RegExp(phrase, 'g')
    const array = [...string.matchAll(regExp)]
    return array.length
  }
}