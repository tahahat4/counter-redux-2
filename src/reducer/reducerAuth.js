


const reducerAuth = (state={islog : false}  , action) => {

  if(action.type === "IsLogin") {
      return {islog : true}
  }

  if(action.type === "NotLogin") {
    return {islog : false}
}


  return state ;
  
}

export default reducerAuth ;