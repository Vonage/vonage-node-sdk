#!/bin/bash

# Enable error handling
set -e

# Run the `lerna changed` command to get the list of changed packages
changed_packages=$(npm run --silent lerna -- changed)

# Loop through each changed package
echo "$changed_packages" | while read -r package; do
  # Extract the package name without the `@vonage/` prefix
  package_name=${package#@vonage/}

  # Change directory into the package folder and publish
  if [ -d "packages/$package_name" ]; then
    cd "packages/$package_name" || exit
    echo "Publishing $package_name..."
    if ! npm publish; then
      echo "Failed to publish $package_name" >&2
      exit 1
    fi
    cd - > /dev/null || exit # Return to the previous directory
  else
    echo "Directory packages/$package_name does not exist, skipping..."
  fi
done

echo "Publishing process completed!"
