import {WordSorter} from '../src/WordSorter.js'
import {testStr5} from './testStrings.js'
import {Helper} from '../src/Helper.js'

const helper = new Helper()

const wordSorter = new WordSorter(helper)
const expectedAscending = ['Ett', 'Fem', 'Fyra', 'Nio', 'Sex', 'Sju', 'Tio', 'Tre', 'Två', 'Åtta']
const expectedDescending = ['Åtta', 'Två', 'Tre', 'Tio', 'Sju', 'Sex', 'Nio', 'Fyra', 'Fem', 'Ett']

test('sort words in string ascending', () => {
  expect(wordSorter.sortWordsAscending(testStr5)).toEqual(expectedAscending)
})

test('sort words in string descending', () => {
  expect(wordSorter.sortWordsDescending(testStr5)).toEqual(expectedDescending)
})
