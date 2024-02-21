import React, { useState } from 'react'
import "./Post.css"
import { BiLike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";

import { AiFillLike } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { DisLikePost, LikePost } from '../Redux/actions/ActionTask';
import CommentPopUp from './CommentPopUp';

export default function Post({data}) {
const [Icon , setIcon]=useState(false) ;
const [popUp , setPopUp]=useState(false)
const dispatch=useDispatch();

const HandleLike=(id)=>{
  setIcon(true) ; 
  dispatch(LikePost(id))
}
const HandleDisLike=(id)=>{
  setIcon(false) ; 
  dispatch(DisLikePost(id))
}
  return (
    <div className='postElement'>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <div className='icons'>
        <div>
       
        {data.likes}{Icon ? <AiFillLike size={35} style={{cursor:"pointer"}} onClick={()=>HandleDisLike(data.blogId)}/> :<BiLike style={{cursor:"pointer"}} size={35} onClick={()=>HandleLike(data.blogId)}/> }
        </div>
        <FaRegComments onClick={()=>setPopUp(true)}  size={35}/>
        {
          popUp ? <CommentPopUp title={data.title} postId={data.blogId} show={popUp} setShow={setPopUp}/> : null
        }
      </div>
    </div>
  )
}
