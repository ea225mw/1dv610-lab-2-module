# word-works

## Description
This module is developed in a university course student project made at Linneus University, Sweden.

The intended use of the module is for digging out statistics from and modify a text. The module can be seen as something that adds extra methods to the JavaScript String object. Examples: find the longest and shortest word(s), the most common letter, make all first letters of every word capital.

## Installation

`npm install word-works`

## Usage 

`import word-works from 'word-works'`

#### Code example 1

```javascript
const ww = word-works
const str = 'The length of a name should correspond to the size of the scope.'
const longestWord = ww.findLongestWord(str)
console.log(longestWord)
```
Expected output:
```javascript
{ numberOfLetters: 10, words: [ 'correspond' ] }
```


## Module Manual

To see all available methods and how to use them, take a look at [The Manual](manual.md).

