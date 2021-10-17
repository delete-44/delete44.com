import Head from "next/head";
import Image from "next/image";
import GitHub from "./icons/github";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Delete44</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-around items-center min-vh-100 w-80 center">
        <section className="w-40">
          <h1 className="mv0 pv0">Hi, I'm Anthony...</h1>

          <small className="mt0">He/Him</small>

          <p className="mt4">
            I'm a software developer &amp; music nerd,{" "}
            <strong>constantly</strong> struggling with UI design.
          </p>

          <p>
            I'm learning about accessible design; if you have any advice or spot
            any glaring issues with my work, please reach out and let me know
            via <a href={process.env.twitterLink}>Twitter</a>.
          </p>
        </section>

        <section className="w-30 flex-column">
          <img
            src={`${process.env.gravatarLink}?s=600`}
            className="w-100"
          />

          <nav className="inline-flex justify-around mt3 w-100">
            <GitHub />
            <Image
              src="/twitter.svg"
              alt="Twitter Logo"
              width={64}
              height={64}
            />
            <Image
              src="/linkedin.svg"
              alt="LinkedIn Logo"
              width={64}
              height={64}
            />
          </nav>
        </section>
      </main>

      <footer>&copy; Anthony | Delete44</footer>
    </div>
  );
}
