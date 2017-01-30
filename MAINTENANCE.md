## A quick guide for maintainers

The following is a quick cheatsheet for maintainers.

* New commits are pushed to the `develop` branch or their own feature branch and merged into `develop`.
* The `master` branch is to be kept up to date with the latest release on [NPMjs.com](https://www.npmjs.com/).
* When rolling a new release, update the package version on the `develop` branch and merge `develop` into `master`. Then tag this new release:
  * `git checkout master`
  * `git pull master` to make sure you have the merged content
  * `git tag -v v0.0.0` where `0.0.0` is your release
  * `git push origin v0.0.0` to push your tag to GitHub
* **Note:** when merging `develop` into `master` make sure to use `rebase and merge` in order to keep `develop` in sync with `master`.
* When a new tag is pushed to Github the new release will automatically be pushed to NPM by Travis.
