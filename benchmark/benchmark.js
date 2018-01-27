'use strict'

const fs = require('fs')
const assert = require('assert')
const bench = require('nanobench')

let str = fs.readFileSync('big.txt')
str = str + str + str + str
console.log('Sample text size:', str.length)

const quicklyCountSubstrings = require('quickly-count-substrings')
const countSubstring = require('count-substring')
const stringOccurrence = require('string-occurrence')
const occurrences = require('occurrences')
const needleString = require('needle-string')
const regexOccurrence = require('regex-occurrence')
const countStrings = require('count-strings')

// important to access all of str before any benchmark to ensure it's ready in
// memory
const expected = quicklyCountSubstrings(str, 'the')
let r

bench('quickly-count-substrings', function (b) {
  r = quicklyCountSubstrings(str, 'the')
  b.end()
  assert.equal(r, expected)
})

bench('count-substring', function (b) {
  r = countSubstring(str, 'the')
  b.end()
  assert.equal(r, expected)
})

bench('string-occurrence', function (b) {
  r = stringOccurrence(str, 'the', {caseInsensitive: false})
  b.end()
  assert.equal(r, expected)
})

bench.skip('occurrences', function (b) {
  occurrences(str, 'foo', function (result) {
    b.end()
    assert.equal(result.count, expected)
  })
})

bench('needle-string', function (b) {
  r = needleString(str, 'the')
  b.end()
  assert.equal(r, expected)
})

bench('regex-occurrence', function (b) {
  r = regexOccurrence(str, /the/g)
  b.end()
  assert.equal(r, expected)
})

bench('count-strings', function (b) {
  r = countStrings(str, 'the')
  b.end()
  assert.equal(r, expected)
})
