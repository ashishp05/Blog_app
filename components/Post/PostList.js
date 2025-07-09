import React from 'react'
import classes from "./PostList.module.css"
import PostItem from './PostItem'
const PostList = ({posts}) => {
 
  return (
    <div className={classes.postListContainer}> 
   
        {
            posts.map(post => {
                return <div key={post.id} className={classes.postItem}>
                     <PostItem post={post}/>
                </div>
            })
        }
    </div>
  )
}

export default PostList