import { Helper } from "./Helper.js"

const obj = { 'a': 1 }

export class MostCommonLetterFinder {
  #helper
  #regExp = /[^\p{L}]+/gu // The negation of all characters that are considered letters by Unicode.
  #countedLetters = {}
  #amountOfMostCommonLetter = 0
  #mostCommonLetter = []
  #caseSensitivity = false

  constructor() {
    this.#helper = new Helper
  }

  mostCommonLetter(string) {
    this.#helper.validateInput(string)
    this.#resetPrivateFields()

    this.#countEachLetter(string)
    this.#findAmountOfMostCommonLetter()
    this.#filterOutMostCommonLetter()

    return this.#mostCommonLetter
  }

  mostCommonLetterCS(string) {
    this.#helper.validateInput(string)
    this.#resetPrivateFields()
    this.#caseSensitivity = true

    this.#countEachLetter(string)
    this.#findAmountOfMostCommonLetter()
    this.#filterOutMostCommonLetter()

    return this.#mostCommonLetter
  }

  #resetPrivateFields() {
    this.#mostCommonLetter = []
    this.#amountOfMostCommonLetter = 0
    this.#countedLetters = {}
    this.#caseSensitivity = false
  }

  #countEachLetter(string) {
    for (let i = 0; i < string.length; i++) {
      let letter = string.charAt(i)
      letter = this.#determineCase(letter)

      if (letter.match(this.#regExp)) {
        continue
      } else {
        this.#addToCountedLetters(letter)
      }
    }
  }

  #determineCase(letter) {
    if (this.#caseSensitivity) {
      return letter
    } else {
      return letter.toLowerCase()
    }
  }

  #addToCountedLetters(letter) {
    if (this.#countedLetters[letter]) {
      this.#countedLetters[letter]++
    } else {
      this.#countedLetters[letter] = 1
    }
  }

  #findAmountOfMostCommonLetter() {
    for (const letter in this.#countedLetters) {
      if (this.#countedLetters[letter] > this.#amountOfMostCommonLetter) {
        this.#amountOfMostCommonLetter = this.#countedLetters[letter]
      }
    }
  }

  #filterOutMostCommonLetter() {
    for (const key in this.#countedLetters) {
      if (this.#countedLetters[key] === this.#amountOfMostCommonLetter) {
        const object = {
          [key]: this.#countedLetters[key]
        }
        this.#mostCommonLetter.push(object)
      }
    }
  }
}