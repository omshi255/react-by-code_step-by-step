import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
function App() {
const[count,setCount]=useState(0)
React.useEffect(()=>
console.log("use effect")

)
  return (
    <>
    <h1>USE EFFECT IN REACT : {count}</h1>
    <button onClick={()=>setCount(count+1)}>Update Counter</button>
    </>
  );
}

export default App;
