#!/bin/bash
set -e
cd ./packages
for package in $(ls); do
  echo "Publishing $package"
  (cd "$package" && npm run build && npm publish)
  echo "$package published"
done
echo "Publishing process completed!"
