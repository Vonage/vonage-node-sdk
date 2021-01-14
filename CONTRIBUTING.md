# Getting Involved

Thanks for your interest in the project, we'd love to have you involved! Check out the sections below to find out more about what to do next...

## Opening an Issue

We always welcome issues, if you've seen something that isn't quite right or you have a suggestion for a new feature, please go ahead and open an issue in this project. Include as much information as you have, it really helps.

## Making a Code Change

We're always open to pull requests, but these should be small and clearly described so that we can understand what you're trying to do. Feel free to open an issue first and get some discussion going.

When you're ready to start coding, fork this repository to your own GitHub account and make your changes in a new branch. Once you're happy, open a pull request and explain what the change is and why you think we should include it in our project.

## Reviewing a Pull Request

To run the code for an open PR, follow these steps:

1. `git clone https://github.com/vonage/vonage-node-sdk.git`
1. `cd vonage-node-sdk`
1. `git checkout BRANCH_NAME`
1. `npm install`
1. `npm run compile`
1. In a new directory, download the `https://github.com/Vonage/vonage-node-code-snippets` repository
1. Install the local Vonage package `npm i /path/to/vonage-node-sdk`
1. Copy `.env-example` to `.env` and update any variables required.
1. Run the sample code snippet to test the SDK.

When reviewing PRs, and switching branches to compare running examples against feature branches, don't forget to run `npm compile` after switching branches.
