import { testStr1, testStr2, testStr3 } from './testStrings.js'
import { WordAndLetterCounter } from '../src/WordAndLetterCounter.js'
const string = 'one, two, three, four, five, six, seven, eight, nine, ten. Eleven twelve thirteen fourteen!'
const walc = new WordAndLetterCounter

test('count words', () => {
  expect(walc.countWords(testStr1)).toBe(200)
  expect(walc.countWords(string)).toBe(14)
})

test('count letters', () => {
  expect(walc.countLetters(string)).toBe(67)
})