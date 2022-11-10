## Maintainers

The following is a quick cheatsheet for maintainers.

* New commits are pushed to their own feature branch and merged into `3.x`.
* The `3.x` branch is to be kept up to date with the latest release on [NPMjs.com](https://www.npmjs.com/).
* When rolling a new release, tag this new release:
    * `git checkout master`
    * `git pull master` to make sure you have the merged content
    * `git tag -v v0.0.0` where `0.0.0` is your release
    * `git push origin v0.0.0` to push your tag to GitHub
* The ` ``2.x` branch will remain to allow critical security fixes for version 2 of the SDK
