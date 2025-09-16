import { splitOnWhitespace } from '../src/index.js'

test('split on whitespaces', () => {
  expect(
    splitOnWhitespace('Functions should do one thing')
  ).toEqual(['Functions', 'should', 'do', 'one', 'thing'])
})