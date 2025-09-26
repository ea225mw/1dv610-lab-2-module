import { testStr1, testStr2, testStr3, testStr4, testStr5, testStr6 } from "../tests/testStrings.js"
import { WordLengthFinder } from "./WordLengthFinder.js";
import { WordSorter } from "./WordSorter.js";
import { StringTransformer } from "./StringTransformer.js";
import { PhraseCounter } from "./PhraseCounter.js";
import { MostCommonLetterFinder } from "./MostCommonLetterFinder.js";
const testObject = { name: 'Emanuel' }

const wlf = new WordLengthFinder
const ws = new WordSorter
const st = new StringTransformer
const pc = new PhraseCounter
const mclf = new MostCommonLetterFinder

// console.log(wlf.findLongestWord(testStr4))
// console.log(ws.sortWordsDescending(testStr5))
// console.log(st.firstLetterCapital(testStr4));
console.log(pc.countSpecifiedPhrase(testStr2, 'G'))
// console.log(mclf.mostCommonLetter('aaabbb'))
// console.log(mclf.mostCommonLetter(testStr2))
// console.log(mclf.mostCommonLetterCS(testStr2))

