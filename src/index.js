import { testStr1, testStr2 } from "./testStrings.js"
const object = { name: 'Emanuel' }

/**
 * Finds the longest word(s) in a string.
 * 
 * @param {string} string  - The string in which to find the longest word.
 */
function findLongestWord(string) {
  if (typeof string !== 'string') {
    console.log('Not a string!');
    return
  }

  const cleanedString = removeNonLetters(string)
  const splittedArray = splitOnWhitespace(cleanedString)
  const sortedArray = sortDescending(splittedArray)
  const onlyLongestWordsArray = sortedArray.filter((element) => element.length === sortedArray[0].length)

  const onlyUniqueWords = new Set
  onlyLongestWordsArray.forEach((element) => onlyUniqueWords.add(element))

  return { numberOfLetters: onlyLongestWordsArray[0].length, words: Array.from(onlyUniqueWords) }
}

function removeNonLetters(string) {
  const regExp = /[\.,:;!\?\/\-\–"”]/g

  return string.replaceAll(regExp, ' ')
}

/**
 * Splits a string on whitespaces and returns an array of words.
 * @param {string} string - The string to be handled.
 */
function splitOnWhitespace(string) {
  return string.split(' ')
}

function sortAscending(array) {
  array.sort((a, b) => a.length - b.length)
    .filter((element) => element.length > 0)
  return array
}

function sortDescending(array) {
  array.sort((a, b) => b.length - a.length)
    .filter((element) => element.length > 0)
  return array
}

const test = findLongestWord(testStr2)
console.log(test);

export { splitOnWhitespace }