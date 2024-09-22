import User from './User'
import './App.css';
import React,{useEffect,useState} from 'react'
function App() {
const [data,setData]=useState(10);
const[count,setCount]=useState(100);
 return (
  <div className="App">
 <User count={count} data={data} />
   <button onClick={()=>setCount(count+1)} >update count</button>
   <button onClick={()=>setData(data+1)} >update data</button>
   
   
  </div>
  
  );
}

export default App;
