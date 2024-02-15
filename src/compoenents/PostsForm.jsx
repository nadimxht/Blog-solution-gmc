import React, {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import "./PostsForm.css"
import { useDispatch } from 'react-redux';
import { AddPost } from '../Redux/actions/ActionTask';

export default function PostsForm() {
    const dispatch=useDispatch();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [Post, setPost] = useState({})

    const HandleSubmit = (e) => {
        e.preventDefault();
        setPost({blogId: Date.now(), likes: 0, comments: [], createdAt: `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDay()}`, title: title, content: content})
        dispatch(AddPost(Post));
    }
    return (
        <Form className='form'>
            <Form.Group>
                <Form.Label>Post Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder='Title'
                    onChange={(event) => setTitle(event.target.value)}/>
            </Form.Group>

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control
                    as="textarea"
                    type="text"
                    placeholder='write what you are thinking ..'
                    onChange={(event) => setContent(event.target.value)}/>
            </Form.Group>
            <Button onClick={(e) => HandleSubmit(e)}>Share Post</Button>

        </Form>
    )
}
