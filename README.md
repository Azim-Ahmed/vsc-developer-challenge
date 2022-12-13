## Submitted JS-developer Convert Currency (vscode-Extension) Challenge

#### Clone this repo
` npm install` or
`yarn` or
`pnpm install`

#### then run this command
` npm run build` to build the extension and check the output as like as other way

## JS Developer Challenge

We deeply value adaptability and a learning mindset for our engineering hires. We believe It helps to foster a culture of continuous improvement and innovation by challenging developers to think outside the box and come up with creative solutions to problems.

As a developer, we believe you must hear about VS code and its extension marketplace. Here is a coding challenge to build a VS code extension. We are not expecting you to have a prior experience with VS Code extensions and the objective here is to measure how fast you can capture new concepts.

## Problem Statement:

Assume you are working on a fintech product and you do currency conversion frequently throughout the day at work. As a developer, you spend most of the time with your code editor and you are using VS code. You are a productivity freak and want to find the currency conversion rates without leaving your code editor.

You created a VS Code extension that helps you get currency conversion rates instantly in the browser. We would like to see how you do it. Consider the fact you can’t allow more than 4 hours for it.

If you lack some inspiration, refer to the screenshot below on how an another developer at impulze did it. But if you have a better idea, we welcome that too!

## Sample Output:

![alt text](https://github.com/impulze-ai/vsc-developer-challenge/blob/master/images/sample.gif)

## Getting Started

1. Here we are providing you the boilerplate for creating the vscode extension or you can setup the environment referring the VSCode Developer docs.

   - [Boilerplate Code](https://github.com/impulze-ai/vsc-developer-challenge)
   - [VS Code Developer Docs](https://code.visualstudio.com/api)

2. Refer to the link to know how to debug the VS Code extensions :[Link](https://code.visualstudio.com/api/get-started/your-first-extension)
3. You can get the currency rates data from `rates.json` file on the root folder -> [Link to the file](https://github.com/impulze-ai/vsc-developer-challenge/blob/master/rates.json)

## Sharing your work / result

We want you to create a public GitHub repo either by creating one or forking the [provided repo](https://github.com/impulze-ai/vsc-developer-challenge) and sharing the URL as a reply to the email.

## Resources📘:

Here are some resources for you to get things close.

- [Boilerplate for creating vscode extension](https://github.com/impulze-ai/vsc-developer-challenge)
- [Vscode documentation for creating extension](https://code.visualstudio.com/api/get-started/your-first-extension)
- [Using webview in vscode extension](https://code.visualstudio.com/api/extension-guides/webview)

## Success Tips💡

- If the forked boilerplate code is not running, probably you should update your vscode version in package.json. [Refer here for more.](https://stackoverflow.com/questions/50748695/vs-code-extension-helloworld-sample-in-typescript-is-not-working)
- If you receive any instance of command execution error, make sure that directory “out” exists.
  If not, execute the command `npm run watch`
- Set option ***enableScripts: true*** inorder to avoid javascript blocking on webview.
- Write meaningful commit messages
- You can show some awesomeness if you can write the test cases within the given time. But it’s not mandatory.
- The review committee will evaluate the code for accuracy, efficiency, and readability
