import { validateInput, splitOnWhitespace, findLongestWord, sortDescending, deleteEmptyElements, createArrayWithUniqueLongestWords } from '../src/index.js'
import { testStr1, testStr2 } from './testStrings.js'
import { testArray1, testArray2, duplicatedWordsArray } from './testArrays.js'

test('split on whitespaces', () => {
  expect(
    splitOnWhitespace('Functions should do one thing')
  ).toStrictEqual(['Functions', 'should', 'do', 'one', 'thing'])
})

test('find longest word in test strings', () => {
  expect(
    findLongestWord(testStr1)
  ).toStrictEqual({
    numberOfLetters: 14,
    words: ['necessitatibus', 'exercitationem']
  })
  expect(
    findLongestWord(testStr2)
  ).toStrictEqual({
    numberOfLetters: 20,
    words: ['onsdagseftermiddagen']
  })
})

test('sorting an array descending', () => {
  expect(
    sortDescending(testArray1)
  ).toStrictEqual([
    'correspond', 'length',
    'should', 'scope',
    'name', 'size',
    'The', 'the',
    'the', 'of',
    'to', 'of',
    'a'
  ])
})

test('delete empty string elements from array', () => {
  expect(
    deleteEmptyElements(testArray2)
  ).toEqual(['Clarity', 'is', 'king'])
})

test('remove identical elements in array', () => {
  expect(
    createArrayWithUniqueLongestWords(duplicatedWordsArray)
  ).toEqual(['functions', 'should', 'either', 'do', 'something', 'or', 'answer', 'but', 'not', 'both'])
})

test('recieve an error message when input is wrong type', () => {
  expect(() => validateInput(42)).toThrow('Input must be a string.')
  expect(() => validateInput(null)).toThrow('Input must be a string.')
  expect(() => validateInput(['string'])).toThrow('Input must be a string.')
})

test('does not throw error if input is a string', () => {
  expect(() => validateInput('Hello there!')).not.toThrow()
})