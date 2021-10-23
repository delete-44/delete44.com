import matter from "gray-matter";
import marked from "marked";

// Written by Pankaj Parashar, https://css-tricks.com/building-a-blog-with-next-js/

// Read all the Markdown files in the _posts directory,
// parse the front matter defined at the beginning of the
// post using gray-matter and return the array of metadata
// for all the posts.
export async function getPosts() {
  const context = require.context("_posts", false);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`_posts/${post}`);
    const meta = matter(content.default);

    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
    });
  }
  return posts;
}

export async function getSeriesPosts() {
  const context = require.context("_posts/rails-with-vue", false);
  const posts = [];

  console.log("CC", context);
  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`_posts/rails-with-vue/${post}`);
    const meta = matter(content.default);

    posts.push({
      slug: `rails-with-vue/${post.replace(".md", "")}`,
      title: meta.data.title,
    });
  }
  return posts;
}

// For a given slug, this function will locate the file in the
// _posts directory, parse the Markdown with the marked library
// and return the output HTML with metadata.
export async function getPostBySlug(slug) {
  const fileContent = await import(`_posts/${slug}.md`);
  const meta = matter(fileContent.default);
  const content = marked(meta.content);
  return {
    title: meta.data.title,
    content: content,
  };
}
