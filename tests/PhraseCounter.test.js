import {PhraseCounter} from '../src/PhraseCounter.js'
import {testStr3} from './testStrings'
import {Helper} from '../src/Helper.js'

const helper = new Helper()
const pc = new PhraseCounter(helper)

test('count phrases in a string', () => {
  expect(pc.countSpecifiedPhrase(testStr3, 'function')).toBe(10)
  expect(pc.countSpecifiedPhrase(testStr3, 'n')).toBe(89)
})
