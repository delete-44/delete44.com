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

// Layout for the landing page - overrides "Head" attributes such as title & SEO tags,
// then writes each section in order & renders the footer
export default function Home() {
  return (
    <div className="sc-parent">
      <Head>
        <title>Delete44</title>
        <link rel="icon" href={`${process.env.gravatarLink}?s=16`} />
      </Head>

      <Landing />
      <About />
      <TechnicalSkills />
      <Blog />

      <footer className="sc-child mv3 flex flex-column flex-row-ns justify-between items-center w-70-ns w-90 center">
        <small>&copy; Anthony | Delete44</small>

        <nav className="flex inline-flex-ns flex-wrap justify-center justify-between-ns w-40-ns w-90">
          <GitHub footerLink />
          <LinkedIn footerLink />
          <Twitter footerLink />
          <StackShare footerLink />
          <WriteAs footerLink />
        </nav>
      </footer>
    </div>
  );
}
