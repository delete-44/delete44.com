import React from "react";

export default function TechnicalSkills() {
  return (
    <section className="flex flex-row-ns flex-column justify-between items-center min-vh-100 w-60-ns w-90 center bb b--secondary sc-child">
      <section className="w-60-ns w-100">
        <h1>Technical Skills...</h1>

        <p className="mt0">
          My ideal tech stack for full-stack projects is:
          <ul>
            <li>
              <strong>Ruby on Rails</strong> in API-only mode, with RSpec for
              testing &amp; CI managed with GitHub actions
            </li>
            <li>
              <strong>React</strong> as a frontend framework to consume this API
            </li>
            <li>
              <strong>Flutter</strong> for mobile apps when needed, although I
              really ought to investigate React Native...
            </li>
          </ul>
        </p>
      </section>

      {/* TODO: Stackshare logo */}
      <section className="w-30-ns w-100 flex-column pt0-ns pt4 mb0-ns mb3">
        <h2>Stackshare</h2>
        <p>
          For more information, I've put together a StackShare to showcase my
          preferred technologies:
        </p>
        <img
          src={`${process.env.gravatarLink}?s=600`}
          className="w-100"
          alt="A picture of the site author, Anthony"
        />
      </section>
    </section>
  );
}
