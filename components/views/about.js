import React from "react";

export default function About() {
  return (
    <section className="flex flex-column justify-center min-vh-100 w-70-ns w-90 center bb b--secondary sc-child">
      <h1 id="about">About me...</h1>

      <p className="mt0">
        At a fundamental level, I am passionate about code quality and
        maintainability; having worked on projects that lack this, I understand
        the value of <strong>minimal</strong> &amp;{" "}
        <strong>well-organised</strong> code.
      </p>

      <p>
        From a design perspective, I care about effective &amp; accessible user
        experiences. It is <strong>vital</strong> that applications are usable
        by people with different needs, but this does not mean compromises need
        to be made on aesthetics.
      </p>

      <p>
        It is the responsibility of everybody to be actively anti-fascist &amp;
        support marginalised groups.
      </p>
    </section>
  );
}
