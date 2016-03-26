#!/usr/bin/env bash
message=$*

npm run build

git commit -a -m "$message"