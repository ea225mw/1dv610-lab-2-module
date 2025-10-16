import { testStr1, testStr2, testStr3, testStr4, testStr5, testStr6 } from "./testStrings.js"

import { stringWorks } from "../index.js";

console.log(stringWorks.mostFrequentLetter(testStr1))
console.log(stringWorks.mostFrequentLetterCS(testStr1))
console.log(stringWorks.countSpecifiedPhrase(testStr1, 'g'))
console.log(stringWorks.makeFirstLetterCapital(testStr4))
console.log(stringWorks.findLongestWord(testStr2))
console.log(stringWorks.findShortestWord(testStr2))
console.log(stringWorks.countWords(testStr2))
console.log(stringWorks.countLetters(testStr1))

