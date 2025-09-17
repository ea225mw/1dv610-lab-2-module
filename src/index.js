import { testStr1, testStr2, testStr3, testStr4 } from "../tests/testStrings.js"
import { LongestWordFinder } from "./LongestWordFinder.js";
const testObject = { name: 'Emanuel' }

const lwf = new LongestWordFinder

const test = lwf.findLongestWord(testStr3)
console.log(test);