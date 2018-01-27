#!/usr/bin/env sh

npm i \
  nanobench \
  count-substring \
  string-occurrence \
  occurrences \
  needle-string \
  regex-occurrence \
  count-strings

if [ ! -f big.txt ]; then
  curl https://norvig.com/big.txt > big.txt
fi

node benchmark.js
