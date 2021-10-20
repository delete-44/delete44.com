import Head from "next/head";
import Link from "next/link";
import { getPostBySlug, getPosts } from "@api";

export default function Post(props) {
  return (
    <main>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <article>
        <h1>{props.title}</h1>

        <div dangerouslySetInnerHTML={{ __html: props.content }} />

        <Link href="/#blog">
          <a>Return</a>
        </Link>
      </article>
    </main>
  );
}

export async function getStaticProps(context) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  let paths = await getPosts();

  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
