import { splitOnWhitespace, findLongestWord, sortDescending, deleteEmptyElements } from '../src/index.js'
import { testStr1, testStr2 } from './testStrings.js'
import { testArray1, testArray2 } from './testArrays.js'

test('split on whitespaces', () => {
  expect(
    splitOnWhitespace('Functions should do one thing')
  ).toStrictEqual(['Functions', 'should', 'do', 'one', 'thing'])
})

test('find longest word in testString1', () => {
  expect(
    findLongestWord(testStr1)
  ).toStrictEqual({
    numberOfLetters: 14,
    words: ['necessitatibus', 'exercitationem']
  })
})

test('find longest word in testString1', () => {
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

