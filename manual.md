# word-works - Manual

## Description
This module is developed in a university course student project made at Linneus University, Sweden.

The intended use of the module is for digging out statistics from and modify a text. The module can be seen as something that adds extra methods to the JavaScript String object. Examples: find the longest and shortest word(s), the most common letter, make all first letters of every word capital.

## Installation

`npm install word-works`

## Usage 

`import wordWorks from 'word-works'`

## Available methods

### `findLongestWord`, `findShortestWord`

**Description:** <br> 
Finds the longest or shortest words in a string.

```javascript
const ww = wordWorks
const str = 'The length of a name should correspond to the size of the scope.'
const longestWord = ww.findLongestWord(str)
console.log(longestWord)
```
**Expected output:**
```javascript
{ numberOfLetters: 10, words: [ 'correspond' ] }
```

```javascript
const shortestWord = ww.findShortestWord(str)
console.log(shortestWord)
```
**Expected output:**
```javascript
{ numberOfLetters: 1, words: [ 'a' ] }

```
___

### `firstLetterCapital`

**Description:** <br>
Transforms the first letter of all words in a string to capital.

```javascript
const ww = wordWorks
const str = 'The length of a name should correspond to the size of the scope.'
const transformedString = ww.firstLetterCapital(str)
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
const ww = wordWorks
const str = 'Lorem ipsum dolor sit amet consectetur sit adipisicing elit.'
const countTheWordSit = ww.countSpecifiedPhrase(str, 'sit')
const countTheLetterE = ww.countSpecifiedPhrase(str, 'e')
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
const ww = wordWorks
const str = 'Ipsum dolor sit amet consectetur sit adipisicing elit.'
const mostFrequentLetter = ww.mostFrequentLetter(str)
const mostFrequentLetterCS = ww.mostFrequentLetterCS(str)
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
const ww = wordWorks
const str = 'Lorem ipsum dolor sit amet consectetur sit adipisicing elit.'
const sortAsc = ww.sortWordsAscending(str)
const sortDesc = ww.sortWordsDescending(str)
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

