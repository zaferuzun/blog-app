import React from 'react'
import BlogForm from './BlogForm'
import { addBlog } from '../../actions/blogs'
import { useSelector,useDispatch } from 'react-redux';

const AddBlogPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
        <h1>Add Blog</h1>
        <BlogForm onSubmit={(blog)=>{
            dispatch(addBlog(blog));
        }}/>
    </div>
  )
}

export default AddBlogPage