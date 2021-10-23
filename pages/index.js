import Head from "next/head";
import About from "@views/about";
import Landing from "@views/landing";
import TechnicalSkills from "@views/technical_skills";
import Blog from "@views/blog";
import { getPosts, getSeriesPosts } from "@api";

export default function Home(props) {
  return (
    <div className="sc-parent">
      <Head>
        <title>Delete44</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en-GB" />
      </Head>

      <Landing />
      <About />
      <TechnicalSkills />
      <Blog posts={props.posts} seriesPosts={props.seriesPosts} />

      <footer className="sc-child">&copy; Anthony | Delete44</footer>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();
  const seriesPosts = await getSeriesPosts();

  return {
    props: {
      posts: posts,
      seriesPosts: seriesPosts,
    },
  };
}
