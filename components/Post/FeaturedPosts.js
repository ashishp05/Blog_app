import React from 'react'
import PostItem from './PostItem'
import classes from "./PostList.module.css"
const FeaturedPosts = (props) => {
    const {posts} = props
  return (
    <div >
        <h1 className='heading'>FeaturedPosts</h1>
       
      <div  className={classes.postListContainer}>
          {
            posts.map(post => {
                return <div key={post.data.id} className={classes.postItem}>
                     <PostItem post={post}/>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default FeaturedPosts