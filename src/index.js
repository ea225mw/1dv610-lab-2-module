import { testStr1, testStr2, testStr3, testStr4 } from "../tests/testStrings.js"
const object = { name: 'Emanuel' }

/**
 * Finds the longest word(s) in a string.
 * 
 * @param {string} string  - The string in which to find the longest word.
 */
function findLongestWord(string) {
  validateInput(string)

  const cleanedString = removeNonLetters(string)
  const splittedStringArray = splitOnWhitespace(cleanedString)
  const sortedArray = sortDescending(splittedStringArray)
  deleteEmptyElements(sortedArray)
  const onlyLongestWordsArray = removeAllWordsExceptLongest(sortedArray)
  const onlyUniqueWords = createArrayWithUniqueLongestWords(onlyLongestWordsArray)

  return createReturnObject(onlyUniqueWords)
}

function validateInput(input) {
  if (typeof input !== 'string') {
    throw new Error('Input must be a string.')
  }
}

function removeNonLetters(string) {
  const regExp = /[\.,:;!\?\/\-\–\*\+"”`'\(\)\[\]\{\}#0123456789]/g

  return string.replaceAll(regExp, ' ')
}

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

function removeAllWordsExceptLongest(array) {
  return array.filter((element) => element.length === array[0].length)
}

function createArrayWithUniqueLongestWords(array) {
  const set = new Set
  array.forEach((element) => set.add(element.toLowerCase()))
  return Array.from(set)
}

function createReturnObject(set) {
  return { numberOfLetters: set[0].length, words: Array.from(set) }
}

const test = findLongestWord(testStr3)
console.log(test);

export { validateInput, splitOnWhitespace, findLongestWord, sortDescending, deleteEmptyElements, createArrayWithUniqueLongestWords }