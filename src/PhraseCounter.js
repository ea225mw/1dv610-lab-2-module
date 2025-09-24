import { Helper } from './Helper.js'

export class PhraseCounter {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  countSpecifiedPhrase(string, char) {
    this.#helper.validateInput(string)
    this.#checkCharArgument(char)
    return this.#findSpecifiedPhrase(string, char)
  }

  #checkCharArgument(char) {
    if (typeof char !== 'string') throw new Error('Second argument must be a string.')
    // if (char.length !== 1) throw new Error('Only one character is allowed as second argument.')
  }

  #findSpecifiedPhrase(string, char) {
    const regExp = new RegExp(char, 'g')
    const array = [...string.matchAll(regExp)]
    return array.length
  }
}