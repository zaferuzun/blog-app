import React from 'react'

const BlogListItem = ({id,title,description}) => {
  return (
    <>
        <li>
           Başlık: {title} 
        </li>
        <li>
           Açıklama: {description} 
        </li>
        <br></br>
    </>
  )
}

export default BlogListItem