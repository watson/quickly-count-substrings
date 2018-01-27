'use strict'

module.exports = count

function count (str, substr, opts) {
  // Using an empty string in indexOf behaves weird when `fromIndex` is larger
  // then the string length. So better handle that case separately so we don't
  // end up in an infinite loop.
  //
  // 'foo'.indexOf('o', 100) === -1
  // 'foo'.indexOf('', 100) === 3
  if (substr === '') return str.length + 1

  const skip = opts && opts.overlap ? 1 : substr.length
  let offset = -1
  let r = 0

  while (true) {
    offset = str.indexOf(substr, offset + skip)
    if (offset === -1) break
    r++
  }

  return r
}
