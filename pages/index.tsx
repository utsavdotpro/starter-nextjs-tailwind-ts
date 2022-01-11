import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS + Tailwind in TS - Starter Template</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8">
        Hello from <a href="https://nextjs.org/">NextJS</a> with{" "}
        <a href="https://tailwindcss.com/">Tailwind</a> in{" "}
        <a href="https://typescriptlang.org/">TypeScript</a> starter template!
      </main>
    </div>
  );
};

export default Home;
