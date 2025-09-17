import { Helper } from "./Helper.js";

export class WordSorter {
  #helper

  constructor() {
    this.#helper = new Helper
  }

  sortWordsDescending(string) {
    this.#helper.validateInput(string)
    const splittedWordsArray = this.#helper.splitOnWhitespace(string)
    return this.#descendingOrder(splittedWordsArray)
  }

  sortWordsAscending(string) {
    this.#helper.validateInput(string)
    const splittedWordsArray = this.#helper.splitOnWhitespace(string)
    return this.#ascendingOrder(splittedWordsArray)
  }

  #descendingOrder(array) {
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

  #ascendingOrder(array) {
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