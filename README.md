# string-works

### Description
This module is developed in a university course student project made at Linneus University, Sweden.

The intended use of the module is for digging out statistics from and modify a string. The module can be seen as something that adds extra methods to the JavaScript String object. Examples: find the longest and shortest word(s), the most common letter, make all first letters of every word capital.

### Installation

`npm install string-works`

### Usage 

`import stringWorks from 'string-works'`

### Dependencies
The string-works package has no dependencies to other external libraries.

### Code example 1

```javascript
const str = 'The length of a name should correspond to the size of the scope.'
const longestWord = stringWorks.findLongestWord(str)
console.log(longestWord)
```
Expected output:
```javascript
{ numberOfLetters: 10, words: [ 'correspond' ] }
```

### Code example 2

```javascript
const str = 'The length of a name should correspond to the size of the scope.'
const capitalizedFirstLetters = stringWorks.makeFirstLetterCapital(str)
console.log(capitalizedFirstLetters)
```
Expected output:
```javascript
The Length Of A Name Should Correspond To The Size Of The Scope.
```

## Package Manual

To see all available methods and how to use them, take a look at [The Manual](manual.md).

## License

**MIT License**

Copyright (c) [2025] [Emanuel Andersen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.