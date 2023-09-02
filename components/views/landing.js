import React from "react";
import GitHub from "@icons/github";
import LinkedIn from "@icons/linkedin";
import Bluesky from "@icons/bluesky";

export default function Landing() {
  return (
    <main className="flex flex-row-ns flex-column-reverse justify-between items-center min-vh-100 w-70-ns w-90 center bb b--secondary sc-child">
      <section className="w-60-ns w-100">
        <h1 className="mv0 pv0" id="home">
          Hi, I&apos;m Anthony...
        </h1>

        <small className="mt0">He/Him</small>

        <p>
          I&apos;m a software developer &amp; music nerd, with a penchant for{" "}
          <strong>terrible</strong> movies.
        </p>

        <p>
          I&apos;m currently learning about accessible design; if you have any
          advice or find problems with my work, please reach out and let me know
          via <a href={process.env.linkedinLink}>LinkedIn</a>.
        </p>

        <small>
          The code for this site is available on it&apos;s{" "}
          <a href={process.env.githubRepoLink}>GitHub repo</a>.
        </small>
      </section>

      <section className="w-30-ns w-100 flex-column pt0-ns pt4 mb0-ns mb3">
        <img
          src={`${process.env.gravatarLink}?s=600`}
          className="w-100"
          alt="A picture of the site author, Anthony"
        />

        <nav className="inline-flex justify-around mt3 w-100">
          <GitHub />
          <Bluesky />
          <LinkedIn />
        </nav>
      </section>
    </main>
  );
}
