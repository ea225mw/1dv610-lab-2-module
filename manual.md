# string-works - The Manual

## Description
This module is developed in a university course student project made at Linneus University, Sweden.

The intended use of the module is for digging out statistics from and modify a string. The module can be seen as something that adds extra methods to the JavaScript String object. Examples: find the longest and shortest word(s), the most common letter, make all first letters of every word capital.

## Installation

`npm install string-works`

## Usage 

`import { stringWorks } from 'string-works'`

## Available methods

### `findLongestWord`, `findShortestWord`

**Description:** <br> 
Finds the longest or shortest words in a string.

```javascript
const str = 'The length of a name should correspond to the size of the scope.'
const longestWord = stringWorks.findLongestWord(str)
console.log(longestWord)
```
**Expected output:**
```javascript
{ numberOfLetters: 10, words: [ 'correspond' ] }
```

```javascript
const shortestWord = stringWorks.findShortestWord(str)
console.log(shortestWord)
```
**Expected output:**
```javascript
{ numberOfLetters: 1, words: [ 'a' ] }

```
___

### `makeFirstLetterCapital`

**Description:** <br>
Transforms the first letter of all words in a string to capital.

```javascript
const str = 'The length of a name should correspond to the size of the scope.'
const transformedString = stringWorks.makeFirstLetterCapital(str)
console.log(transformedString)
```
**Expected output:**
```javascript
The Length Of A Name Should Correspond To The Size Of The Scope.
```
___

### `countSpecifiedPhrase(string, phrase)`

**Description:** <br>
Counts the occurance of a specified phrase. The phrase can be a single character or a word. The counting is case sensitive. 

**Parameters:** <br>
***string*** - The string in which to count phrase. <br>
***phrase*** - A string holding the phrase to count.

```javascript
const str = 'Lorem ipsum dolor sit amet consectetur sit adipisicing elit.'
const countTheWordSit = stringWorks.countSpecifiedPhrase(str, 'sit')
const countTheLetterE = stringWorks.countSpecifiedPhrase(str, 'e')
console.log(countTheWordSit)
console.log(countTheLetterE)
```

**Expected output:**
```javascript
2
5
```

---

### `mostFrequentLetter(string)`, `mostFrequentLetterCS(string)`

**Description:** <br>
Counts the occurance of the most frequently used letter in a string. There are two variants of this method:
- `mostFrequentLetter` - **Not** Case Sensitive. 'E' and 'e' are considered the same letter.
- `mostFrequentLetterCS` - Case Sensitive. 'E' and 'e' are considered different letters.

**Parameters:** <br>
***string*** - The string in which to find the most frequently used letter. <br>

```javascript
const str = 'Ipsum dolor sit amet consectetur sit adipisicing elit.'
const mostFrequentLetter = stringWorks.mostFrequentLetter(str)
const mostFrequentLetterCS = stringWorks.mostFrequentLetterCS(str)
console.log(mostFrequentLetter)
console.log(mostFrequentLetterCS)
```

**Expected output:**
```javascript
[ { i: 8 } ]
[ { i: 7 } ]
```

---

### `sortWordsDescending(string)`, `sortWordsAscending(string)`

**Description:** <br>
Returns an array of all the words in a string in ascending and descending alphabetical order, respectively.

**Parameters:** <br>
***string*** - The string in which to sort words alphabetically.

```javascript
const str = 'Lorem ipsum dolor sit amet consectetur sit adipisicing elit.'
const sortAsc = stringWorks.sortWordsAscending(str)
const sortDesc = stringWorks.sortWordsDescending(str)
console.log(sortAsc)
console.log(sortDesc)
```

**Expected output:**
```javascript
[
  'adipisicing', 'amet',
  'consectetur', 'dolor',
  'elit.',       'ipsum',
  'Lorem',       'sit',
  'sit'
]
[
  'sit',         'sit',
  'Lorem',       'ipsum',
  'elit.',       'dolor',
  'consectetur', 'amet',
  'adipisicing'
]
```

