# Getting Involved

Thanks for your interest in the project, we'd love to have you involved! Check out the sections below to find out more about what to do next...

## Opening an Issue

We always welcome issues, if you've seen something that isn't quite right or you have a suggestion for a new feature, please go ahead and open an issue in this project. Include as much information as you have, it really helps.

## Making a Code Change

We're always open to pull requests, but these should be small and clearly described so that we can understand what you're trying to do. Feel free to open an issue first and get some discussion going.

When you're ready to start coding, fork this repository to your own GitHub account and make your changes in a new branch. Once you're happy, open a pull request and explain what the change is and why you think we should include it in our project.

## Reviewing a Pull Request

To run the code for an open PR, follow these steps:

1. `git clone https://github.com/Nexmo/nexmo-node.git`
2. `cd nexmo-node`
3. `git checkout BRANCH_NAME`
4. `npm install`
5. `npm compile`
6. Uncomment the appropriate line in `examples/run-examples.js` for each example you want to run.
7. In the `examples` folder, copy `example.env` to `.env`.
8. Update `.env` with your API key and API secret.
9. `node examples/run-examples.js`

When reviewing PRs, and switching branches to compare running examples against feature branches, don't forget to run `npm compile` after switching branches. Because examples run from the `lib/` folder, and that folder is ignored by Git, you'll need to re-compile the source every time you switch a branch.
