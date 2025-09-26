import { Helper } from "./Helper.js"

const obj = { 'a': 1 }

export class MostFrequentLetterFinder {
  #helper
  #regExp = /[^\p{L}]+/gu // The negation of all characters that are considered letters by Unicode.
  #countedLetters = {}
  #amountOfMostFrequentLetter = 0
  #mostFrequentLetter = []
  #caseSensitivity = false

  constructor() {
    this.#helper = new Helper
  }

  mostFrequentLetter(string) {
    this.#helper.validateInput(string)
    this.#resetPrivateFields()

    this.#countEachLetter(string)
    this.#findAmountOfMostFrequentLetter()
    this.#filterOutMostFrequentLetter()

    return this.#mostFrequentLetter
  }

  mostFrequentLetterCS(string) {
    this.#helper.validateInput(string)
    this.#resetPrivateFields()
    this.#caseSensitivity = true

    this.#countEachLetter(string)
    this.#findAmountOfMostFrequentLetter()
    this.#filterOutMostFrequentLetter()

    return this.#mostFrequentLetter
  }

  #resetPrivateFields() {
    this.#mostFrequentLetter = []
    this.#amountOfMostFrequentLetter = 0
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

  #findAmountOfMostFrequentLetter() {
    for (const letter in this.#countedLetters) {
      if (this.#countedLetters[letter] > this.#amountOfMostFrequentLetter) {
        this.#amountOfMostFrequentLetter = this.#countedLetters[letter]
      }
    }
  }

  #filterOutMostFrequentLetter() {
    for (const key in this.#countedLetters) {
      if (this.#countedLetters[key] === this.#amountOfMostFrequentLetter) {
        const object = {
          [key]: this.#countedLetters[key]
        }
        this.#mostFrequentLetter.push(object)
      }
    }
  }
}