import React, { useState } from 'react'

const BlogForm = (props) => {


    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');


    const onSubmitEvent=(e)=>{
        e.preventDefault();
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