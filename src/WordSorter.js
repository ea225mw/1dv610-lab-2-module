import { Helper } from "./Helper.js";

export class WordSorter {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  sortWordsAscending(string) {
    this.#helper.validateInput(string)
    const splittedWordsArray = this.#helper.splitOnWhitespace(string)
    return this.#ascendingOrder(splittedWordsArray)
  }

  sortWordsDescending(string) {
    this.#helper.validateInput(string)
    const splittedWordsArray = this.#helper.splitOnWhitespace(string)
    return this.#descendingOrder(splittedWordsArray)
  }

  #ascendingOrder(array) {
    return array.sort((a, b) => {
      const wordA = a.toUpperCase()
      const wordB = b.toUpperCase()

      if (wordA < wordB) {
        return -1
      }
      if (wordA > wordB) {
        return 1
      }
      return 0
    })
  }

  #descendingOrder(array) {
    return array.sort((a, b) => {
      const wordA = a.toUpperCase()
      const wordB = b.toUpperCase()

      if (wordA < wordB) {
        return 1
      }
      if (wordA > wordB) {
        return -1
      }
      return 0
    })
  }
}