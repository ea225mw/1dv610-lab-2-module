import {StringTransformer} from '../src/StringTransformer.js'

const stringTransformer = new StringTransformer()
const string = 'one, two, three, four, five, six, seven, eight, nine, ten.'
const expected = 'One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.'

test('capatilize first letter of every word', () => {
  expect(stringTransformer.makeFirstLetterCapital(string)).toBe(expected)
})
