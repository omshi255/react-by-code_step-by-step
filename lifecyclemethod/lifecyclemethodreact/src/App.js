import React from 'react'
import User from './User'
import './App.css'


export default function App() {
  const[name,setName]=React.useState("swati")

  return (
    <div>
      <h1>Render Method in React</h1>
      <User name={name}/>
      <button  onClick={()=>setName("Omshi")}>Update Name</button>
     
    </div>
  )
}
