import { Helper } from "./Helper.js"

const obj = { 'a': 1 }

export class MostCommonLetterFinder {
  #helper
  #regExp = /[^\p{L}]+/gu // The negation of all characters that are considered letters by Unicode.
  #countedLetters = {}
  #amountOfMostCommonLetter = 0
  #mostCommonLetter = []

  constructor() {
    this.#helper = new Helper
  }

  mostCommonLetter(string) {
    this.#helper.validateInput(string)

    this.#countEveryLetter(string)
    this.#findAmountOfMostCommonLetter()
    this.#filterOutMostCommonLetter()

    return this.#mostCommonLetter
  }

  #countEveryLetter(string) {
    for (let i = 0; i < string.length; i++) {
      let letter = string.charAt(i).toLowerCase()
      if (letter.match(this.#regExp)) {
        continue
      }
      if (this.#countedLetters[letter]) {
        this.#countedLetters[letter]++
      } else {
        this.#countedLetters[letter] = 1
      }
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