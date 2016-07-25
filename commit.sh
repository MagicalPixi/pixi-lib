#!/usr/bin/env bash
message=$*

npm run build
npm run buildDist

git add -A

git commit -a -m "$message"