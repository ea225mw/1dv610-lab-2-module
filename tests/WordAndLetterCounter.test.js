import {testStr1} from './testStrings.js'
import {WordAndLetterCounter} from '../src/WordAndLetterCounter.js'
const string = 'one, two, three, four, five, six, seven, eight, nine, ten. Eleven twelve thirteen fourteen!'
const wordAndLetterCounter = new WordAndLetterCounter()

test('count the number of words in a string', () => {
  expect(wordAndLetterCounter.countWords(testStr1)).toBe(200)
  expect(wordAndLetterCounter.countWords(string)).toBe(14)
})

test('count the number of letters in a string', () => {
  expect(wordAndLetterCounter.countLetters(string)).toBe(67)
})
