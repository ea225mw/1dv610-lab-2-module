import { PhraseCounter } from '../src/PhraseCounter.js'
import { testStr3 } from './testStrings'
const pc = new PhraseCounter

test('count phrases in a string', () => {
  expect(pc.countSpecifiedPhrase(testStr3, 'function')).toBe(10)
  expect(pc.countSpecifiedPhrase(testStr3, 'n')).toBe(89)
})

test('exception is thrown if phrase is not a string', () => {
  expect(() => pc.countSpecifiedPhrase(testStr3, ['array'])).toThrow('Second argument must be a string.')
})