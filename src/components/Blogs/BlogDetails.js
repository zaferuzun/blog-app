import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from "react-redux";

const BlogDetails = () => {
  const { id } = useParams(); // ← URL'deki :id buraya gelir

  const blog = useSelector((state) =>
    state.blogs.find((b) => b.id == id)
  );

  console.log(blog);

 if (!blog) {
    return <p>Blog bulunamadı</p>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
    </div>
  );
}

export default BlogDetails