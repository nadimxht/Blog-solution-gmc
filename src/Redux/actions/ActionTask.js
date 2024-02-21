


export const AddPost=(payload)=>{
  return {
    type:"ADDPOST",
    payload:payload,//object 
  }
}
export const LikePost=(payload)=>{
  return {
    type:"LIKEPOST",
    payload:payload,//id 
  }
}
export const DisLikePost=(payload)=>{
  return {
    type:"DISLIKEPOST",
    payload:payload,//id 
  }
}
export const AddComment=(payload)=>{
  return {
    type:"ADDCOMMENT",
    payload:payload,//{id: , text , username}
  }
}