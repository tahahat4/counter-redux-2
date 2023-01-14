import { createStore } from "redux" ;
import RootReducer from "../reducer/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// 1- create store  
const store = createStore(RootReducer , composeWithDevTools()) 

export default store ;