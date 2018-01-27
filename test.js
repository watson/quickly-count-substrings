'use strict'

const test = require('tape')
const count = require('./')

const cases = [
  ['foobar', 'o', 2],
  ['foobar', '', 7],
  ['foobar', 'x', 0],
  ['foobar', 'f', 1], // first char
  ['foobar', 'r', 1] // last char
]

cases.forEach(function (testCase) {
  test(`count('${testCase[0]}', '${testCase[1]}') === ${testCase[2]}`, function (t) {
    t.equal(count.apply(null, testCase), testCase[2])
    t.end()
  })
})
