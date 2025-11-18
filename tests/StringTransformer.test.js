import {StringTransformer} from '../src/StringTransformer.js'
import {Helper} from '../src/Helper.js'

const helper = new Helper()
const stringTransformer = new StringTransformer(helper)
const string = 'one, two, three, four, five, six, seven, eight, nine, ten.'
const expected = 'One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.'

test('capatilize first letter of every word', () => {
  expect(stringTransformer.makeFirstLetterCapital(string)).toBe(expected)
})
