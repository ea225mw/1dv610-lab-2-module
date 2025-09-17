import { testStr1, testStr2, testStr3, testStr4, testStr5 } from "../tests/testStrings.js"
import { LongestWordFinder } from "./LongestWordFinder.js";
import { WordSorter } from "./WordSorter.js";
const testObject = { name: 'Emanuel' }

const lwf = new LongestWordFinder
const ws = new WordSorter

const LWF_test = lwf.findLongestWord(testStr3)

const WS_test = ws.sortWordsDescending(testStr5)
console.log(WS_test);
