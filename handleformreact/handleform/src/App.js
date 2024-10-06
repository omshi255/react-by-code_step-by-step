import {useState} from 'react'
import './App.css';

function App() {
const[name,setName]=useState("");
const[tnc,setTnc]=useState(false);
const[intrest,setIntrest]=useState(false)

function clearForm() {
  setName('');
  setTnc(false);
  setIntrest(false);
  console.log(name, tnc, intrest)
}



 function getFormData(e)
 {
  console.log(name,tnc,intrest)
   e.preventDefault()
 } 
  return (
   <>
   <h1>Handle Form Control !</h1>
   <form action="
   " onSubmit={getFormData} >
<input type="text" placeholder="Enter the text" value={name} onChange={(e)=>setName(e.target.value)} /><br/><br/>
  <select name="" id="" onChange={(e)=>setTnc(e.target.value)} >
  <option value="
    "> Select an OPtion</option>
    <option value="
    "> Marvel</option>
     <option value="
    "> Dc comics</option>
     <option value="
    "> Hawelll</option>
  </select>
  <br/><br/>
  <input type="checkbox" onChange={(e)=>setIntrest(e.target.checked)} value={intrest} /><span>Accept terms and condition</span>
  <br/><br/>
  <button type="submit">Submit</button>
  <button onChange={()=>clearForm}>Clear</button>
   </form>
   </>
  );
}

export default App;
