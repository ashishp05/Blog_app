import fs from "fs";
import path from "path";
import matter from "gray-matter";
const postDir = path.join(process.cwd(), "posts");

function getPostData(filename) {
  const filepath = path.join(postDir, filename);
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = { data, content };

  return postData;
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postDir);

  const postsArr = postFiles.map((postfile) => {
    return getPostData(postfile);
  });

  const posts = postsArr.sort((a, b) =>
    a.createdDate > b.createdDate ? -1 : 1
  );
  return posts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const posts = allPosts.filter((post) => post.data.isFeatured);
  return posts;
}

export function getPostBySlug(slug) {
  const allPosts = getAllPosts();

  const posts = allPosts.filter((post) => post.data.slug == slug);
  return posts[0];
}
