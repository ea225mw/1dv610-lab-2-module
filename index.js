import {Helper} from './src/Helper.js'
import {MostFrequentLetterFinder} from './src/MostFrequentLetterFinder.js'
import {PhraseCounter} from './src/PhraseCounter.js'
import {StringTransformer} from './src/StringTransformer.js'
import {WordLengthFinder} from './src/WordLengthFinder.js'
import {WordSorter} from './src/WordSorter.js'
import {WordAndLetterCounter} from './src/WordAndLetterCounter.js'

const helper = new Helper()
const mostFrequentLetterFinder = new MostFrequentLetterFinder(helper)
const phraseCounter = new PhraseCounter(helper)
const stringTransformer = new StringTransformer(helper)
const wordLengthFinder = new WordLengthFinder(helper)
const wordSorter = new WordSorter(helper)
const wordAndLetterCounter = new WordAndLetterCounter(helper)

export const stringWorks = {
  mostFrequentLetter: (string) => mostFrequentLetterFinder.mostFrequentLetter(string),
  mostFrequentLetterCS: (string) => mostFrequentLetterFinder.mostFrequentLetterCS(string),
  countSpecifiedPhrase: (string, phrase) => phraseCounter.countSpecifiedPhrase(string, phrase),
  makeFirstLetterCapital: (string) => stringTransformer.makeFirstLetterCapital(string),
  findLongestWord: (string) => wordLengthFinder.findLongestWord(string),
  findShortestWord: (string) => wordLengthFinder.findShortestWord(string),
  sortWordsAscending: (string) => wordSorter.sortWordsAscending(string),
  sortWordsDescending: (string) => wordSorter.sortWordsDescending(string),
  countWords: (string) => wordAndLetterCounter.countWords(string),
  countLetters: (string) => wordAndLetterCounter.countLetters(string),
}
