import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'

export default function PostsList() {
    const Posts=useSelector(state=>state)
  return (
    <div style={{display:"flex" , justifyContent:"center",alignContent:"center"}}>
        {
            Posts.posts.map(e=>(
                <Post key={e.blogId} data={e} />
            ))
        }
    </div>
  )
}
