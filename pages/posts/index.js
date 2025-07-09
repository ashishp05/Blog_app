import PostList from "@/components/Post/PostList";
import { getAllPosts } from "@/lib/posts-util";
import React from "react";

const PostLists = (props) => {
    const {posts} = props

  return (
    <div> 
       <h1 className="heading">All Posts</h1>
        <PostList posts={posts} />
      </div>
  
  );
};

export default PostLists;


export function getStaticProps() {

   const posts = getAllPosts()
   
   return {
    props : {
      posts :posts
    }
   }
}