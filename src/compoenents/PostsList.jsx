import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

export default function PostsList() {
    const Posts=useSelector(state=>state)
  return (
    <div>
        {
            Posts.posts.map(e=>(
                <Post data={e} />
            ))
        }
    </div>
  )
}
