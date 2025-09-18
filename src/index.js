import { testStr1, testStr2, testStr3, testStr4, testStr5 } from "../tests/testStrings.js"
import { WordLengthFinder } from "./WordLengthFinder.js";
import { WordSorter } from "./WordSorter.js";
const testObject = { name: 'Emanuel' }

const wlf = new WordLengthFinder
const ws = new WordSorter

const LWF_test = wlf.findShortestWord(testStr5)
const WS_test = ws.sortWordsDescending(testStr5)

console.log(LWF_test);
// console.log(WS_test);
