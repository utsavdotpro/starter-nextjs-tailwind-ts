# NextJS with Tailwind in TypeScript
A starter template for NextJS with Tailwind in TypeScript with a [modular project structure](#project-structure)

- Learn [NextJS](https://nextjs.org) v12
- Learn [Tailwind](https://tailwindcss.com) v3
- Learn [TypeScript](https://typescriptlang.org) v4

[<img src="https://ik.imagekit.io/iutsav/fork-on-codesandbox__e0mFWzr1.png?updatedAt=1641916982302" width="200"/>](https://githubbox.com/utsavdotpro/starter-nextjs-tailwind-ts/tree/modular-folder-structure)

---

## How to Reuse Locally?

Use `degit` to download the repository locally.

> ### ❓ What is [degit](https://github.com/Rich-Harris/degit)?
> degit downloads a copy of git repository with downloading its entire git history.

Install degit globally.

````bash
npm install -g degit
````

Download the latest version
````bash
degit utsavdotpro/starter-nextjs-tailwind-ts#modular-folder-structure
````

## How to Reuse on [CodeSandbox](https://codesandbox.io)?
> CodeSandbox is an online code editor and prototyping tool that makes creating and sharing web apps faster.

[<img src="https://ik.imagekit.io/iutsav/fork-on-codesandbox__e0mFWzr1.png?updatedAt=1641916982302" width="200"/>](https://githubbox.com/utsavdotpro/starter-nextjs-tailwind-ts/tree/modular-folder-structure)

To fork, use the button above or follow these steps:

- Go to [codesandbox.io](https://codesandbox.io)
- Click on **Start coding for free**
  - If logged in, click on **New Sandbox**
- Click on **Import Project**
- Enter https://github.com/u-barnwal/starter-nextjs-tailwind-ts/tree/modular-folder-structure as **GitHub Repository URL**
- Click on **Import and Fork**
- ✅

## Project Structure
```
project
|-- public                    ℹ️ keep your static resource files
|-- src
|   |-- common
|   |   |-- components
|   |   |   |-- elements      ℹ️ keep your state-less components
|   |   |   |                 ℹ️ keep your state-full components
|   |   |-- config            ℹ️ keep your configuration files
|   |   |-- hoc
|   |   |-- hooks
|   |   |-- layouts
|   |   |-- sections          ℹ️ keep your common sections
|   |   |-- types
|   |-- lib
|   |-- modules
|   |-- pages
|   |   |-- api               ℹ️ keep your pages here
|   |-- services
|   |-- styles
|   |-- utils
|   |   |-- constants         ℹ️ keep your constants
|   |   |                     ℹ️ keep your util functions
```
## Getting Started

Install dependencies
````bash
yarn install
````

Run the development build
````bash
yarn dev
````

Run the production build
````bash
yarn build
yarn start
````

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
