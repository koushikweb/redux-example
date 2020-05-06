import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch(state => state.isLogged);
  return (
    <div className="App">
     <h1>Counter {counter}</h1>
     <button onClick={()=>dispatch(increment(5))}>+</button>
     <button onClick={()=>dispatch(decrement(5))}>-</button>
    {isLogged?<h3>User is Logged in</h3>:'' }
    </div>
  );
}

export default App;
