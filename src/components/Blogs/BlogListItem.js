import React from 'react'
import { Link } from 'react-router-dom'

const BlogListItem = ({id,title,description}) => {
  return (
    <>
        <li>
           Başlık: {title} - <Link to = {`/blogs/${id}`} >dasda</Link>
        </li>
        <li>
           Açıklama: {description} 
        </li>
        <br></br>
    </>
  )
}

export default BlogListItem