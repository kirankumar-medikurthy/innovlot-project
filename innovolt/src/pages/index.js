import Head from "next/head";

import home from "./home";
import header from "../layouts/header";
import footer from "@/layouts/footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>innovolt.club | second hand vehicles</title>
        <meta name="description" content="second hand vehicles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {header()}
        {home()}
        {footer()}
      </main>
    </>
  );
}
