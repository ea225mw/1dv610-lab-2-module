import { MostFrequentLetterFinder } from "./MostFrequentLetterFinder.js"
import { PhraseCounter } from "./PhraseCounter.js"
import { StringTransformer } from "./StringTransformer.js"
import { WordLengthFinder } from "./WordLengthFinder.js"
import { WordSorter } from "./WordSorter.js"

const mostFrequentLetterFinder = new MostFrequentLetterFinder
const phraseCounter = new PhraseCounter
const stringTransformer = new StringTransformer
const wordLengthFinder = new WordLengthFinder
const wordSorter = new WordSorter

export const stringWorks = {
  mostFrequentLetter: (string) => mostFrequentLetterFinder.mostFrequentLetter(string),
  mostFrequentLetterCS: (string) => mostFrequentLetterFinder.mostFrequentLetterCS(string),
  countSpecifiedPhrase: (string, phrase) => phraseCounter.countSpecifiedPhrase(string, phrase),
  makeFirstLetterCapital: (string) => stringTransformer.makeFirstLetterCapital(string),
  findLongestWord: (string) => wordLengthFinder.findLongestWord(string),
  findShortestWord: (string) => wordLengthFinder.findShortestWord(string),
  sortWordsAscending: (string) => wordSorter.sortWordsAscending(string),
  sortWordsDescending: string => wordSorter.sortWordsDescending(string)
}