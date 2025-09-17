import { testStr1, testStr2, testStr3 } from './testStrings.js'

import { LongestWordFinder } from '../src/LongestWordFinder.js'

const lwf = new LongestWordFinder

test('find longest word in test strings', () => {
  expect(
    lwf.findLongestWord(testStr1)
  ).toStrictEqual({
    numberOfLetters: 14,
    words: ['necessitatibus', 'exercitationem']
  })
  expect(
    lwf.findLongestWord(testStr2)
  ).toStrictEqual({
    numberOfLetters: 20,
    words: ['onsdagseftermiddagen']
  })
  expect(
    lwf.findLongestWord(testStr3)
  ).toStrictEqual({
    numberOfLetters: 14,
    words: ['implementation']
  })
})

/*
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

*/