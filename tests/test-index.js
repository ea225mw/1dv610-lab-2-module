/*import { testStr1, testStr2, testStr3, testStr4, testStr5, testStr6 } from "./testStrings.js"*/

import { stringWorks } from "../index.js";

/*console.log(stringWorks.mostFrequentLetter(testStr1))
console.log(stringWorks.mostFrequentLetterCS(testStr1))
console.log(stringWorks.countSpecifiedPhrase(testStr1, 'g'))
console.log(stringWorks.makeFirstLetterCapital(testStr4))
console.log(stringWorks.findLongestWord(testStr2))
console.log(stringWorks.findShortestWord(testStr2))
console.log(stringWorks.countWords(testStr2))
console.log(stringWorks.countLetters('Lorem ipsum dolor sit amet consectetur sit adipisicing elit.'))*/

/* ----- New tests 2025-11-24 for better clarity of input ----- */
const testString1 = 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, temporibus, nulla ab commodi nobis neque fugit in accusamus, molestias tempore perspiciatis.'

const testString2 = 'The length of a name should correspond to the size of the scope.'

console.log(stringWorks.mostFrequentLetter(testString1))
console.log(stringWorks.mostFrequentLetterCS(testString1))
console.log(stringWorks.countSpecifiedPhrase(testString1, 'g'))
console.log(stringWorks.makeFirstLetterCapital(testString2))
console.log(stringWorks.findLongestWord(testString1))
console.log(stringWorks.findShortestWord(testString1))
console.log(stringWorks.countWords(testString1))
console.log(stringWorks.countLetters(testString1))