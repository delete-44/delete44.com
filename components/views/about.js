import React from "react";

export default function About() {
  return (
    <section className="flex flex-column min-vh-100 w-60-ns w-90 center bb b--secondary">
      <h1>About me...</h1>

      <p className="mt3">
        At a fundamental level, I am passionate about code quality and
        maintainability; having worked on projects that lack this, I understand
        the value of <strong>clear</strong>, <strong>well-organised</strong>{" "}
        code that is easily transferable to new developers.
      </p>

      <p>
        From a design perspective, I care about user experiences that are
        effective and accessible. It is <strong>vital</strong> that applications
        are usable by people with different needs, but this does not mean
        compromises need to be made on aesthetics.
      </p>

      <p>
        It is the responsibility of everybody to be actively anti-fascist &amp;
        support marginalised groups.
      </p>
    </section>
  );
}
