import React from "react";
import WriteAs from "@icons/writeas"

export default function Blog() {
  return (
    <section className="flex flex-row-ns flex-column justify-between items-center min-vh-100 w-70-ns w-90 center sc-child">
      <section className="w-60-ns w-100">
        <h1 id="blog">Blog...</h1>

        <p className="mt0">
          I've written a few articles before to help others with issues that I
          struggled with, or provide documentation where I felt it was lacking.
        </p>

        <p>
          The posts primarily focus on integrating Ruby on Rails with other
          technologies, such as Vue &amp; Docker. They have fallen out of date
          quite quickly, and largely exist as an archive in case they are still
          useful.
        </p>
      </section>

      <section className="w-30-ns w-100 flex-column pt0 mb0-ns mb3">
        <h2 className="mb0">Write.as</h2>

        <p className="mt0 mb3">
          I use Write.as to host these articles. Visit my blog there to read
          them:
        </p>

        <WriteAs />
      </section>
    </section>
  );
}
