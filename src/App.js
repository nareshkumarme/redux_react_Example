import logo from './logo.svg';
import './App.css';
import { store } from './store';
import { increment,decrement,incrementbyvalue } from './Features/Counters/counterSlice';
import { useState } from 'react';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

//Whenever to use Actions or functionality we have to use useDispatch

function App() {

  const [input,setInput] = useState('')
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <div>
      <input type="number" placeholder='Enter number' value={input} onChange={(e)=> setInput(e.target.value)}></input>
      <button onClick={() => dispatch(incrementbyvalue(Number(input)))}>incrementbyvalue</button>
    </div>

    <div>
    <button onClick={() => dispatch(increment())}>Increment</button>
     <span>{count}</span>
    <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>

    
    </>
  );
}

export default App;
