import PostDetails from "@/components/Post/PostDetails";
import { getAllPosts, getPostBySlug } from "@/lib/posts-util";
import React from "react";

const PostInfo = (props) => {
  const post = props.post;

  return (
    <div>
      <PostDetails post={post} />
    </div>
  );
};

export default PostInfo;

export function getStaticProps(context) {
  const slug = context.params.slug;
  const post = getPostBySlug(slug);

  return {
    props: {
      post: post,
    },
     revalidate: 30,
  };
}

export function getStaticPaths() {
  const posts = getAllPosts();

  const slugs = posts.map((post) => {
    return {
      params: {
        slug: post.data.slug,
      },
    };
  });
  return {
    paths: slugs,
    fallback: 'blocking',
  };
}
