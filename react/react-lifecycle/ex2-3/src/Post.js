import "./Post.css";

import React from 'react'

export default function Post({post}) {
  return (
    <div className="post">
        <h2 className="title">{post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}
