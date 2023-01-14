import { combineReducers } from "redux";
import reducerCounter from "./reducerCounter";
import reducerAuth from "./reducerAuth"

const RootReducer = combineReducers({

  Auth:reducerAuth ,
  Counter:reducerCounter 

})

export default RootReducer ;