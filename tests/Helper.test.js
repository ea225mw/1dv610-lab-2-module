import { Helper } from '../src/Helper.js'

const helper = new Helper

test('split on whitespaces', () => {
  expect(
    helper.splitOnWhitespace('Functions should do one thing')
  ).toStrictEqual(['Functions', 'should', 'do', 'one', 'thing'])
})

test('recieve an error message when input is wrong type', () => {
  expect(() => helper.validateInput(42)).toThrow('Input must be a string.')
  expect(() => helper.validateInput(null)).toThrow('Input must be a string.')
  expect(() => helper.validateInput(['string'])).toThrow('Input must be a string.')
})

test('does not throw error if input is a string', () => {
  expect(() => helper.validateInput('Hello there!')).not.toThrow()
})

test('recieve an error message when second argument is wrong type', () => {
  expect(() => helper.checkPhraseArgument(42)).toThrow('Second argument must be a string.')
  expect(() => helper.checkPhraseArgument(null)).toThrow('Second argument must be a string.')
  expect(() => helper.checkPhraseArgument(['string'])).toThrow('Second argument must be a string.')
})