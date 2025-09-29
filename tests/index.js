import { testStr1, testStr2, testStr3, testStr4, testStr5, testStr6 } from "./testStrings.js"
import { WordLengthFinder } from "../src/WordLengthFinder.js";
import { WordSorter } from "../src/WordSorter.js";
import { StringTransformer } from "../src/StringTransformer.js";
import { PhraseCounter } from "../src/PhraseCounter.js";
import { MostFrequentLetterFinder } from "../src/MostFrequentLetterFinder.js";
const testObject = { name: 'Emanuel' }

const wlf = new WordLengthFinder
const ws = new WordSorter
const st = new StringTransformer
const pc = new PhraseCounter
const mflf = new MostFrequentLetterFinder

// console.log(wlf.findLongestWord(testStr4))
// console.log(wlf.findShortestWord(testStr4))
// console.log(ws.sortWordsDescending(testStr5))
// console.log(st.firstLetterCapital(testStr4));
// console.log(pc.countSpecifiedPhrase(testStr2, 'g'))
// console.log(mflf.mostFrequentLetter('aaabbb'))
// console.log(mflf.mostFrequentLetterCS('Ipsum dolor sit amet consectetur sit adipisicing elit.'))
// console.log(mflf.mostFrequentLetterCS(testStr2))

const ww = ws
const str = 'Lorem ipsum dolor sit amet consectetur sit adipisicing elit.'
const sortAsc = ww.sortWordsAscending(str)
const sortDesc = ww.sortWordsDescending(str)
console.log(sortAsc)
console.log(sortDesc)