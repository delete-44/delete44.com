import React from "react";
import StackShare from "../icons/stackshare";

export default function TechnicalSkills() {
  return (
    <section className="flex flex-row-ns flex-column justify-between items-center min-vh-100 w-60-ns w-90 center bb b--secondary sc-child">
      <section className="w-60-ns w-100">
        <h1>Technical Skills...</h1>

        <p className="mt0">My ideal tech stack for full-stack projects is:</p>

        <ul>
          <li>
            <p className="mv0">
              <strong>Ruby on Rails</strong> in API-only mode.
            </p>
          </li>

          <li>
            <p className="mv0">
              <strong>React</strong> as a frontend framework to consume API.
            </p>
          </li>

          <li>
            <p className="mv0">
              <strong>Flutter</strong> for mobile apps when needed.
            </p>
          </li>

          <li>
            <p className="mv0">
              <strong>GitHub Actions</strong> &amp; <strong>Heroku</strong> to
              manage CI/CD pipelines &amp; hosting.
            </p>
          </li>
        </ul>
      </section>

      <section className="w-35-ns w-100 flex-column pt0 mb0-ns mb3">
        <h2 className="mb0">StackShare</h2>

        <p className="mt0 mb3">
          I've put together a StackShare of my preferred technologies, with
          which I have production-calibre industry experience.
        </p>

        <div className="tc w-100">
          <StackShare />
        </div>
      </section>
    </section>
  );
}
