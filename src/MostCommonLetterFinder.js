import { Helper } from "./Helper.js"

const obj = { 'a': 1 }

export class MostCommonLetterFinder {
  #helper
  #regExp = /[^\p{L}]+/gu // The negation of all characters that are considered letters by Unicode.

  constructor() {
    this.#helper = new Helper
  }

  mostCommonLetter(string) {
    /*
    - Kolla så att param är en sträng.
    - Gå igenom varje tecken i strängen och lägg dem (eller deras teckenkod?) i array1.
    - Skapa ett tomt objekt som ska innehålla keys med tecken
    - Gå igenom array1 och om bokstaven på indexet INTE finns som key, lägg till den som key och sätt värdet till 1
    -   Om key redan finns --> key++
    - Sortera objektet efter storlek på värdena
    - Returnera det eller de nyckel/värdepar med högst värde
    */
    this.#helper.validateInput(string)

    let countedLetters = {}

    for (let i = 0; i < string.length; i++) {
      let letter = string.charAt(i).toLowerCase()
      if (letter.match(this.#regExp)) {
        continue
      }
      if (countedLetters[letter]) {
        countedLetters[letter]++
      } else {
        countedLetters[letter] = 1
      }
    }

    let amountOfMostCommonLetter = 0

    for (const letter in countedLetters) {
      if (countedLetters[letter] > amountOfMostCommonLetter) {
        amountOfMostCommonLetter = countedLetters[letter]
      }
    }

    let mostCommonLetter = []

    for (const key in countedLetters) {
      if (countedLetters[key] === amountOfMostCommonLetter) {
        const object = {
          [key]: countedLetters[key]
        }
        mostCommonLetter.push(object)
      }
    }

    return mostCommonLetter
  }
}