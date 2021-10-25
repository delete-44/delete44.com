import React from "react";
import StackShare from "@icons/stackshare";

export default function TechnicalSkills() {
  return (
    <section className="flex flex-row-ns flex-column justify-between-ns justify-around items-center min-vh-100 w-70-ns w-90 center bb b--secondary sc-child">
      <section className="w-60-ns w-100">
        <h1 id="technical_skills">Technical Skills...</h1>

        <p className="mt0">My ideal tech stack for full-stack projects is:</p>

        <ul className="list pl3">
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
              manage CI/CD pipelines.
            </p>
          </li>
        </ul>

        <small>
          I used this stack for my dissertation, Scription - codebase
          on <a href="https://github.com/delete-44-COMP3000">GitHub</a>.
        </small>
      </section>

      <section className="w-30-ns w-100 flex-column pt0 mb0-ns mb3">
        <h2 className="mb0">StackShare</h2>

        <p className="mt0">
          I've put together a StackShare of my preferred technologies.
        </p>

        <p>
          I have experience with each in industry environments.
        </p>

        <StackShare horizontal />
      </section>
    </section>
  );
}
