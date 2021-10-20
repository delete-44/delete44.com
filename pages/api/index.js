import matter from "gray-matter";

// Written by Pankaj Parashar, https://css-tricks.com/building-a-blog-with-next-js/

// Read all the Markdown files in the _posts directory,
// parse the front matter defined at the beginning of the
// post using gray-matter and return the array of metadata
// for all the posts.
export async function getAllPosts() {
  const context = require.context("../_posts", false, /\.md$/);
  const posts = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../_posts/${post}`);
    const meta = matter(content.default);

    posts.push({
      slug: post.replace(".md", ""),
      title: meta.data.title,
    });
  }
  return posts;
}
