#!/usr/bin/env bash
message=$*

npm run build
npm run buildDist

git commit -a -m "$message"