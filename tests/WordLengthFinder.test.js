import {testStr1, testStr2, testStr3} from './testStrings.js'

import {WordLengthFinder} from '../src/WordLengthFinder.js'
const wordLengthFinder = new WordLengthFinder()

test('find longest word in test strings', () => {
  expect(wordLengthFinder.findLongestWord(testStr1)).toStrictEqual({
    numberOfLetters: 14,
    words: ['necessitatibus', 'exercitationem'],
  })
  expect(wordLengthFinder.findLongestWord(testStr2)).toStrictEqual({
    numberOfLetters: 20,
    words: ['onsdagseftermiddagen'],
  })
  expect(wordLengthFinder.findLongestWord(testStr3)).toStrictEqual({
    numberOfLetters: 14,
    words: ['implementation'],
  })
})
