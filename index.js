import { str1, str2 } from "./testStrings.js"

/**
 * Finds the longest word(s) in a string.
 * 
 * @param {string} string  - The string in which to find the longest word.
 */
function findLongestWord(string) {
  if (typeof string !== 'string') {
    // Handle exception
  }

  const cleanedString = removeNonLetters(string)
  const splittedArray = splitOnWhitespace(cleanedString)
  const sortedArray = sortDescending(splittedArray)

  return sortedArray.filter((element) => element.length === sortedArray[0].length)
}

function removeNonLetters(string) {
  const regExp = /[\.,:;!\?\/\-\–"”]/g

  return string.replaceAll(regExp, ' ')
}

/**
 * Splits a string on whitespaces and returns an array of words sorted on length.
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



console.table(findLongestWord(str2))