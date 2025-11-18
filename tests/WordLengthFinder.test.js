import {testStr1, testStr2, testStr3} from './testStrings.js'
import {WordLengthFinder} from '../src/WordLengthFinder.js'
import {Helper} from '../src/Helper.js'

const helper = new Helper()
const wordLengthFinder = new WordLengthFinder(helper)

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
