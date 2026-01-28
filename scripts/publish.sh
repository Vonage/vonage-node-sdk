#!/bin/bash

# Enable error handling
set -e

cd ./packages

for package in $(ls); do
  echo "Puiblishing $pacakge"
  (cd "$package" && npm publish)
  echo "$package published"
done

echo "Publishing process completed!"
