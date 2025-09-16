import { testStr1, testStr2, testStr3, testStr4 } from "../tests/testStrings.js"
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
  console.log(splittedArray);
  const sortedArray = sortDescending(splittedArray)
  deleteEmptyElements(sortedArray)

  const onlyLongestWordsArray = sortedArray.filter((element) => element.length === sortedArray[0].length)

  const onlyUniqueWords = new Set
  onlyLongestWordsArray.forEach((element) => onlyUniqueWords.add(element.toLowerCase()))

  return { numberOfLetters: onlyLongestWordsArray[0].length, words: Array.from(onlyUniqueWords) }
}

function removeNonLetters(string) {
  const regExp = /[\.,:;!\?\/\-\–\*\+"”`'\(\)\[\]\{\}#0123456789]/g

  return string.replaceAll(regExp, ' ')
}

/**
 * Splits a string on whitespaces and returns an array of words.
 * 
 * @param {string} string - The string to be handled.
 */
function splitOnWhitespace(string) {
  return string.trim().split(/\s+/)
}

function sortDescending(array) {
  array.sort((a, b) => b.length - a.length)
  return array
}

function deleteEmptyElements(array) {
  return array.filter((element) => element.length > 0)
}

const test = findLongestWord(testStr4)
console.log(test);

export { splitOnWhitespace, findLongestWord, sortDescending, deleteEmptyElements }