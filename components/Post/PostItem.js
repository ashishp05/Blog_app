import React from 'react'
import classes from "./PostItem.module.css"
import Image from 'next/image'
import Link from 'next/link'
const PostItem = (props) => { 
const post = props.post.data
  return (
    <Link href={`/posts/${post.slug}`} className={classes.postContainer}>
        <div className={classes.postImage}>
            <Image src={"/images/web.jpeg"}  alt='post-image' height={250} width={350}/>
        </div>
        <div className={classes.postData}>
            <p className={classes.postTitle}>{post.title}</p>
            <time className={classes.postTime}>{post.time}</time>
        </div>
        <div className={classes.description}>
            <p className={classes.postDescPara}>{post.description}</p>
        </div>
    </Link>
  )
}

export default PostItem