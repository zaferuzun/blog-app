const authState=   {
    userid:1,
    username:'zuzu',
    email:'info@email.com'
  };

const authReducer = (state=authState,action ) =>{

  switch (action.type){
    default:
      return state;
  }
}
export default authReducer;