export class Helper {
  validateInput(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string.')
    }
  }

  splitOnWhitespace(string) {
    return string.trim().split(/\s+/)
  }
}