import React, { useState } from 'react'

const BlogForm = (props) => {


    const [title,setTitle] = useState(props.title!=undefined?props.title:'');
    const [description,setDescription] = useState(props.description!=undefined?props.description:'');


    const onSubmitEvent=(e)=>{
        e.preventDefault();
        console.log(title, description);
        props.onSubmit({
            title:title,
            description:description,
            dateAdded:new Date().toLocaleDateString()
        })

    }

  return (
    <div>
        <form onSubmit={onSubmitEvent}>
            <div>
                <input placeholder='enter title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
             <div>
                <textarea placeholder='enter description' value={description} onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div>
                <button>Ekle</button>
            </div>
        </form>
    </div>
  )
}

export default BlogForm