import { MostCommonLetterFinder } from "../src/MostCommonLetterFinder.js"
import { testStr5, testStr6 } from "./testStrings.js"
const mclf = new MostCommonLetterFinder

test('find most frequently used letter, non-case-sensitive', () => {
  expect(mclf.mostCommonLetter(testStr5)).toEqual([{ t: 7 }])
})

test('find most frequently used letter, case-sensitive', () => {
  expect(mclf.mostCommonLetterCS(testStr5)).toEqual([{ t: 4 }])
  expect(mclf.mostCommonLetterCS(testStr6)).toEqual([{ K: 4 }])
})