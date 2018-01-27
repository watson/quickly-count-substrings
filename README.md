# quickly-count-substrings

Fast module for counting the number of occurrences of a substring inside
a string.

[![Build status](https://travis-ci.org/watson/quickly-count-substrings.svg?branch=master)](https://travis-ci.org/watson/quickly-count-substrings)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install quickly-count-substrings --save
```

## Usage

```js
const count = require('quickly-count-substrings')

const str = 'The quick brown fox jumps over the lazy dog'

count(str, 'o') // => 4
```

## API

### `result = count(str, substr[, options])`

Returns number of occurrences of `substr` in `str`.

Arguments:

- `str` - The string to search in
- `substr` - The string to search for
- `options` - Optional. If `{overlap: true}`, overlapping substrings
  will be counted (default: `{overlap: false}`)

## Benchmark

Counting substrings in a 24MB string:

```
# quickly-count-substrings
ok ~44 ms (0 s + 43676071 ns)

# count-substring
ok ~134 ms (0 s + 133563148 ns)

# string-occurrence
ok ~184 ms (0 s + 183978927 ns)

# needle-string
ok ~116 ms (0 s + 115521420 ns)

# regex-occurrence
ok ~169 ms (0 s + 169180879 ns)

# count-strings
ok ~491 ms (0 s + 490783663 ns)
```

## License

MIT
