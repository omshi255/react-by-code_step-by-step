import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [data,setData]=useState("Swati")
  return (
    <div className="App">
     <h1>{data}!</h1>
     <button onClick={()=>setData("omshi34567")}>Update data</button>
    </div>
  );
}

export default App;
