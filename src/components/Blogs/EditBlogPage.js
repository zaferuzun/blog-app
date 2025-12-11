import React from 'react'
import BlogForm from './BlogForm'
import { editBlog } from '../../actions/blogs'
import { useSelector,useDispatch } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom'

const EditBlogPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams(); // ← URL'deki :id buraya gelir

  const blogRedux = useSelector((state) =>
    state.blogs.find((b) => b.id == id)
  );

  return (
    <div>
        <h1>Add Blog</h1>
        <BlogForm  {...blogRedux} onSubmit={(blog)=>{
            dispatch(editBlog(blogRedux.id,blog));
            navigate('/blogs');
        }}/>
    </div>
  )
}

export default EditBlogPage