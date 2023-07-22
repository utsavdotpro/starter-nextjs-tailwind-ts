[<img src="https://ik.imagekit.io/iutsav/fork_l0RKONb5l.svg" height="30" />](https://githubbox.com/utsavdotpro/starter-nextjs-tailwind-ts)

# NextJS with Tailwind in TypeScript
A starter template for NextJS with Tailwind in TypeScript with an opinionated [modular project structure](#project-structure).

> Uses NextJS's latest [`app` directory](https://nextjs.org/docs/app/building-your-application/routing)

### Technologies
[![](https://img.shields.io/badge/Next.JS-v13-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![](https://img.shields.io/badge/Tailwind-v3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![](https://img.shields.io/badge/React-v18-149eca?style=for-the-badge&logo=react)](https://react.dev/)
[![](https://img.shields.io/badge/TypeScript-v5-3178c6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)

---

## How to Reuse Locally?

Use `degit` to download the repository locally.

> **❓ What is [degit](https://github.com/Rich-Harris/degit)?**  
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
|   |-- app                   ℹ️ NextJS app directory
|   |   |-- api               ℹ️ NextJS api directory
|   |-- common
|   |   |-- components
|   |   |   |-- elements      ℹ️ keep your state-less components
|   |   |   |                 ℹ️ keep your state-full components
|   |   |-- hoc
|   |   |-- hooks
|   |   |-- layouts
|   |-- core
|   |   |-- config            ℹ️ keep your configuration files
|   |   |-- constants
|   |   |-- services
|   |   |-- types
|   |   |-- utils
|   |-- lib
|   |-- modules
|   |-- styles
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel](https://vercel.com/) platform from the creators of Next.js.

Check out the Next.js deployment [docs](https://nextjs.org/docs/deployment) for more details.
