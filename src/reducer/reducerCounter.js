// 2- create reduser to set  state data ana change it 
const reducerCounter = (state={counter : 0 } , action) => {

  if(action.type === "INCREMENT") {
      return {counter : state.counter + 1}
  }

  if(action.type === "DECREMENT"){
    return {counter : state.counter - 1}
  }

  if(action.type === "RESET") {
    return {counter : 0}
  }


  return state ;
  
}


export default reducerCounter
