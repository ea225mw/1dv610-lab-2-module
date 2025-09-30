import { StringTransformer } from '../src/StringTransformer.js'
const string = 'one, two, three, four, five, six, seven, eight, nine, ten.'
const st = new StringTransformer

test('capatilize first letter of every word', () => {
  expect(st.makeFirstLetterCapital(string)).toBe('One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten.')
})