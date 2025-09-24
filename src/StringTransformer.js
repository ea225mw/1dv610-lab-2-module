import { Helper } from './Helper.js'

export class StringTransformer {
  #helper
  #regExp = /\p{L}/gu // All characters that are considered letters by Unicode.

  constructor() {
    this.#helper = new Helper
  }

  firstLetterCapital(string) {
    this.#helper.validateInput(string)
    const splittedArray = this.#helper.splitOnWhitespace(string)

    const transformedWords = this.#makeArrayWithTransformedWords(splittedArray)

    return this.#makeTransformedString(transformedWords)
  }

  #makeArrayWithTransformedWords(array) {
    return array.map(word => this.#capitalizeFirstLetter(word))
  }

  #capitalizeFirstLetter(word) {
    const indexOfFirstLetter = word.search(this.#regExp)
    const firstLetter = word.charAt(indexOfFirstLetter)
    if (indexOfFirstLetter === -1) { return word }
    return word.slice(0, indexOfFirstLetter) + firstLetter.toUpperCase() + word.slice(indexOfFirstLetter + 1)
  }

  #makeTransformedString(transformedWords) {
    let newString = ''

    transformedWords.forEach((word) => {
      newString += word + ' '
    })
    return newString.trim()
  }
}