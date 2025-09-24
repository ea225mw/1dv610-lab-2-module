import { testStr1, testStr2, testStr3, testStr4, testStr5 } from "../tests/testStrings.js"
import { WordLengthFinder } from "./WordLengthFinder.js";
import { WordSorter } from "./WordSorter.js";
import { StringTransformer } from "./StringTransformer.js";
import { PhraseCounter } from "./PhraseCounter.js";
const testObject = { name: 'Emanuel' }

const wlf = new WordLengthFinder
const ws = new WordSorter
const st = new StringTransformer
const pc = new PhraseCounter

// console.log(wlf.findLongestWord(testStr4))
// console.log(ws.sortWordsDescending(testStr5))
// console.log(st.firstLetterCapital(testStr4));
console.log(pc.countSpecifiedPhrase(testStr3, 'n'))

