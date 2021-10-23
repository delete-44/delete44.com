import Head from "next/head";
import About from "@views/about";
import Landing from "@views/landing";
import TechnicalSkills from "@views/technical_skills";
import Blog from "@views/blog";
import GitHub from "@icons/github";
import LinkedIn from "@icons/linkedin";
import StackShare from "@icons/stackshare";
import Twitter from "@icons/twitter";
import WriteAs from "@icons/writeas";

export default function Home() {
  return (
    <div className="sc-parent">
      <Head>
        <title>Delete44</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en-GB" />
      </Head>

      <Landing />
      <About />
      <TechnicalSkills />
      <Blog />

      <footer className="sc-child mv3 flex flex-column flex-row-ns justify-between items-center w-70-ns w-90 center">
        <small>&copy; Anthony | Delete44</small>

        <nav className="flex inline-flex-ns flex-wrap justify-center justify-between-ns w-40-ns w-90">
          <GitHub />
          <LinkedIn />
          <Twitter />
          <StackShare vertical />
          <WriteAs vertical />
        </nav>
      </footer>
    </div>
  );
}
