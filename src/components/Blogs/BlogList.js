import React from 'react'
import { connect } from 'react-redux'
import BlogListItem from './BlogListItem'

const BlogList = ({blogs}) => {
  return (
    <ul>
      {
        blogs && blogs.map(blog=>{
        return <BlogListItem key={blog.id} {...blog}/>
       })
      }
    </ul>
  )
}

const mapStateToProps = (state) =>{
  return {
    blogs:state.blogs
  }
}

// export default BlogList

export default connect(mapStateToProps)(BlogList);
//React redux ile connect aracılıgı ile baglantı kuruldu.
//connect methoduna bir parametre gönderdik. 
//kendisine gelen state bilgisini ilgili componentin props parametresine içerisine aktarılmasını sağlıyor
//higher order component HOC