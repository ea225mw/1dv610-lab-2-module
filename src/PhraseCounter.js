import { Helper } from './Helper.js'

export class PhraseCounter {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  countSpecifiedPhrase(string, phrase) {
    this.#helper.validateInput(string)
    this.#helper.checkCharArgument(phrase)
    return this.#findSpecifiedPhrase(string, phrase)
  }

  #findSpecifiedPhrase(string, phrase) {
    const regExp = new RegExp(phrase, 'g')
    const array = [...string.matchAll(regExp)]
    return array.length
  }
}