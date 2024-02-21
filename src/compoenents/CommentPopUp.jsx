import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { IoMdSend } from "react-icons/io";

import "./Modal.css"
import { useDispatch, useSelector } from 'react-redux';
import { AddComment } from '../Redux/actions/ActionTask';
export default function CommentPopUp({title , postId , show ,setShow}) {
    const Comments = useSelector(state=>state.posts.find(e=>e.blogId===postId)) ; 

    const [newComment,setNewComment]=useState("") ; 
    const dispatch=useDispatch();
    const handleComment=()=>{
        dispatch(AddComment(
            {
                id:postId , 
                data: {
           
                    username:"admin", 
                    content : newComment
                }
            }
            
            
           ))
    }
  return (
    <Modal className="Modal" size='lg' show={show} onHide={()=>setShow(false)} >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<div className='Comments'>
    {
        Comments.comments&&Comments.comments.map(e=>(
            <div>
                <h4>{e.username}</h4>
                <p>{e.content}</p>
            </div>
        ))
    }
</div>
<div className='newComment'>
    
    <input className='inp' type="text" placeholder='Enter comment' onChange={(ev)=>setNewComment(ev.target.value)} />
    <IoMdSend onClick={()=>handleComment()} className='send' size={30}/>
</div>
        </Modal.Body>
        
      </Modal>
    )
}
