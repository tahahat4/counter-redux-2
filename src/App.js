import { useSelector , useDispatch } from "react-redux";




function App() {

  // 4- access to datat in store redcuer  with useSelector
  const data = useSelector(state => state.Counter.counter)

  const islogin = useSelector(state => state.Auth.islog)



  // 5- change data with reduser 
  const dispatchSTORE = useDispatch() ;









  return (
    <div >

      {
        islogin ?
        <div>
          <h1>your are a user </h1>
          <button onClick={()=> dispatchSTORE({type : "NotLogin"})}>logout</button>
        </div> :
  <div>
      <h1> please login </h1>
      <button onClick={()=> dispatchSTORE({type : "IsLogin"})}>Login</button>
  </div>
      }
      <h1>Counter : {data}</h1>
      <button onClick={() => dispatchSTORE({type : "INCREMENT"})}>Increment</button>
      <button onClick={() => dispatchSTORE({type : "RESET"})}>Reset</button>
      <button onClick={() => dispatchSTORE({type : "DECREMENT"})}>Decrement</button>
    </div>
  );
}

export default App;
