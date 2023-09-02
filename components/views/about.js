import React from "react";

export default function About() {
  return (
    <section className="flex flex-column justify-center min-vh-100 w-70-ns w-90 center bb b--secondary sc-child">
      <h1 id="about">About me...</h1>

      <p className="mt0">
        I am a product-focussed software engineer. Talk to me about{" "}
        <strong>Ruby on Rails</strong> and <strong>React</strong>.
      </p>

      <p>
        At a fundamental level, I am passionate about code quality and
        maintainability; the value of <strong>simple</strong> &amp;{" "}
        <strong>well-organised</strong> code cannot be overstated.
      </p>

      <p>
        From a design perspective, I care about effective &amp; accessible user
        experiences. There is no reason a user experience can&apos;t be both{" "}
        <strong>beautiful</strong> and <strong>accessible</strong>.
      </p>

      <small>
        Queer, proud, and staunchly antifascist. Support marginalised groups.
      </small>
    </section>
  );
}
