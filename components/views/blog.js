import React from "react";
import WriteAs from "@icons/writeas";

export default function Blog() {
  return (
    <section className="flex flex-row-ns flex-column justify-between-ns justify-around items-center min-vh-100 w-70-ns w-90 center bb b--secondary sc-child">
      <section className="w-60-ns w-100">
        <h1 id="blog">Blog...</h1>

        <p className="mt0">
          I&apos;ve written a few articles to provide support where I thought it
          was lacking.
        </p>

        <p className="mv0">Talk to me about:</p>

        <ul className="list pl3">
          <li>
            <p className="mv0">
              <strong>Ruby on Rails</strong>,
            </p>
          </li>

          <li>
            <p className="mv0">
              <strong>React</strong>, &amp;
            </p>
          </li>

          <li>
            <p className="mv0">
              <strong>Flutter</strong>.
            </p>
          </li>
        </ul>
      </section>

      <section className="w-30-ns w-100 flex-column pt0 mb0-ns mb3">
        <h2 className="mb0">Write.as</h2>

        <p className="mt0">
          I use Write.as to host these. Visit my blog there to read them:
        </p>

        <WriteAs />
      </section>
    </section>
  );
}
