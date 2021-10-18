import React from "react";
import GitHub from "../icons/github";
import LinkedIn from "../icons/linkedin";
import Twitter from "../icons/twitter";

export default function LandingPage() {
  return (
    <main className="flex flex-row-ns flex-column-reverse justify-around items-center min-vh-100 w-80 center">
      <section className="w-40-ns w-100">
        <h1 className="mv0 pv0">Hi, I'm Anthony...</h1>

        <small className="mt0">He/Him</small>

        <p className="mt4">
          I'm a software developer &amp; music nerd, <strong>constantly</strong>{" "}
          struggling with UI design.
        </p>

        <p>
          I'm learning about accessible design; if you have any advice or spot
          any glaring issues with my work, please reach out and let me know via{" "}
          <a href={process.env.twitterLink}>Twitter</a>.
        </p>
      </section>

      <section className="w-30-ns w-60 flex-column pt0-ns pt4 mb0-ns mb3">
        <img
          src={`${process.env.gravatarLink}?s=600`}
          className="w-100"
          alt="A picture of the site author, Anthony"
        />

        <nav className="inline-flex justify-around mt3 w-100">
          <GitHub />
          <Twitter />
          <LinkedIn />
        </nav>
      </section>
    </main>
  );
}
