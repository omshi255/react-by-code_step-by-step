
import './App.css';
import React,{useEffect,useState} from 'react'
function App(props) {
useEffect(
  ()=>
 {
    alert("count is"+ props.count)
  console.warn(" Called with data state")
 }
)
 return (
  <div className="App">
 <h1>Count props:: {props.count}</h1>
 <h1>Data props:: {props.data}</h1>
  </div>
  
  );
}

export default App;
