import React from "react";
import Link from "next/link";

export default function Blog(props) {
  return (
    <section className="flex flex-row-ns flex-column justify-between items-center min-vh-100 w-70-ns w-90 center bb b--secondary sc-child">
      <section className="w-60-ns w-100">
        <h1 id="blog">Blog...</h1>

        {console.log(props)}
        <p className="mt0">I have a few posts:</p>

        <ul>
          {props.posts.map((post, idx) => {
            return (
              <li key={idx}>
                <Link href={"/posts/" + post.slug}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="w-30-ns w-100 flex-column pt0 mb0-ns mb3">
        <h2 className="mb0">Series</h2>

        <p className="mt0 mb3">Here is a series of posts on other things...</p>

        <ul>
          {props.seriesPosts.map((post, idx) => {
            return (
              <li key={idx}>
                <Link href={"/posts/" + post.slug}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
