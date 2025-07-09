import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
const PostDetails = ({post}) => {
 const markdown= post.content
  return (
    <div className='center'>
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  )
}

export default PostDetails