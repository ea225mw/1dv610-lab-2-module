export class Helper {
  validateInput(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string.')
    }
  }

  splitOnWhitespace(string) {
    return string.trim().split(/\s+/)
  }

  checkCharArgument(phrase) {
    if (typeof phrase !== 'string') throw new Error('Second argument must be a string.')
  }
}