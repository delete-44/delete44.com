import Head from "next/head";
import About from "../components/views/about";
import Landing from "../components/views/landing";

export default function Home() {
  return (
    <div className="sc-parent">
      <Head>
        <title>Delete44</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
      <About />

      <footer>&copy; Anthony | Delete44</footer>
    </div>
  );
}
