# Minimal House Remix Stack 

![The Minimal Remix Stack Cover](https://user-images.githubusercontent.com/22895284/163196320-0d5070f8-1a51-4b06-93f4-ef92673784fe.png)

⚠️ This is community maintained Remix Stack. The Remix team does not endorse or check this. Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix --template BogDAAAMN/minimal-remix-stack
```

## What's in the stack

- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)

Not a fan of bits of the stack? Find [more stacks](https://github.com/topics/remix-stack) or [create your own](https://remix.run/stacks).

| Package    | Version |
|------------|---------|
| 🚀 React    | 18.2.0  |
| 💿 Remix    | 1.6.7   |
| 💨 Tailwind | 3.0.24  |

## Quickstart

Click this button to create a [Gitpod](https://gitpod.io) workspace with the project set up, and all the packages pre-installed 

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Development

⚠️ This step only applies if you've opted out of having the CLI install dependencies for you:

```sh
npx remix init
```
      
Start dev server:

```sh
yarn dev
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to. Read more at [Remix | Deployment](https://remix.run/docs/en/v1/guides/deployment).

### Types

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

We use [Prettier](https://prettier.io/) for auto-formatting in this project. It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. There's also a `npm run format` script you can run to format all files in the project.
