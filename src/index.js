import { testStr1, testStr2, testStr3, testStr4, testStr5 } from "../tests/testStrings.js"
import { WordLengthFinder } from "./WordLengthFinder.js";
import { WordSorter } from "./WordSorter.js";
import { StringTransformer } from "./StringTransformer.js";
const testObject = { name: 'Emanuel' }

const wlf = new WordLengthFinder
const ws = new WordSorter
const st = new StringTransformer

// console.log(wlf.findShortestWord(testStr5))
// console.log(ws.sortWordsDescending(testStr5))
console.log(st.firstLetterCapital(testStr4));

