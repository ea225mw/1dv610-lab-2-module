import { WordSorter } from '../src/WordSorter.js'
import { testStr5 } from './testStrings.js'

const wordSorter = new WordSorter

test('sort words in string ascending', () => {
  expect(
    wordSorter.sortWordsAscending(testStr5)
  ).toEqual(
    ['Ett', 'Fem', 'Fyra', 'Nio', 'Sex', 'Sju', 'Tio', 'Tre', 'Två', 'Åtta']
  )
})

test('sort words in string descending', () => {
  expect(
    wordSorter.sortWordsDescending(testStr5)
  ).toEqual(
    ['Åtta', 'Två', 'Tre', 'Tio', 'Sju', 'Sex', 'Nio', 'Fyra', 'Fem', 'Ett']
  )
})

