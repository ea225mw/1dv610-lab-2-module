import {MostFrequentLetterFinder} from '../src/MostFrequentLetterFinder.js'
import {testStr5, testStr6} from './testStrings.js'
const mostFrequentLetterFinder = new MostFrequentLetterFinder()

test('find most frequently used letter, non-case-sensitive', () => {
  expect(mostFrequentLetterFinder.mostFrequentLetter(testStr5)).toEqual([{t: 7}])
})

test('find most frequently used letter, case-sensitive', () => {
  expect(mostFrequentLetterFinder.mostFrequentLetterCS(testStr5)).toEqual([{t: 4}])
  expect(mostFrequentLetterFinder.mostFrequentLetterCS(testStr6)).toEqual([{K: 4}])
})
