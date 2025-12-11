


const blogState= [{
      id:1,
      title:'blog title 1',
      description: 'blog description 1',
      dateAdded:0
  }];

const blogReducer = (state=blogState,action ) =>{

  switch (action.type){
    case "ADD_BLOG":
      return [
        ...state,action.blog
      ]
    case "REMOVE_BLOG":
      return state.filter(blog => blog.id!==action.id)  //      return state.filter(({id}) => id!==action.id)
    case "EDIT_BLOG":
      return state.map((blog=> {
        if(blog.id === action.id){
          return {
            ...blog,...action.updates
          }
        }else{
            return blog;
          }
      }))
    default:
      return state;
  }
}

export default blogReducer;