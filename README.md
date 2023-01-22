[<img src="https://ik.imagekit.io/iutsav/fork_l0RKONb5l.svg" height="30" />](https://githubbox.com/utsavdotpro/starter-nextjs-tailwind-ts)

# NextJS with Tailwind in TypeScript
A starter template for NextJS with Tailwind in TypeScript with an opinionated [modular project structure](#project-structure).

### Technologies

- [NextJS](https://nextjs.org) v12
- [Tailwind](https://tailwindcss.com) v3
- [TypeScript](https://typescriptlang.org) v4

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
degit utsavdotpro/starter-nextjs-tailwind-ts
````

---

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

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel](https://vercel.com/) platform from the creators of Next.js.

Check out the Next.js deployment [docs](https://nextjs.org/docs/deployment) for more details.
