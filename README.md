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

