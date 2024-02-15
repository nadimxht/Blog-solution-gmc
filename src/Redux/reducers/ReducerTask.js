

const GlobalState={
  users:[
    {
      id:0 , 
      type:"admin", 
      username:"admin",
      password:"123", 
      access:["CREATE","DELETE","UPDATE"],
    },
    {
      id:0 , 
      type:"user", 
      username:"new user",
      password:"123", 
      access:["COMMENT","LIKE"],
    }
  ] , 
  posts:[
    {
      blogId:"0",
      title:"First Post", 
      content:"This is my first post",
      likes:0 , 
      comments:[],
      createdAt:""
    }
  ]
}

const Reducer=(state=GlobalState , action)=>{
  switch(action.type){

    case "ADDPOST" : return {...state , posts:[...state.posts , action.payload]}
    default: return state
  }
}
export default Reducer ; 