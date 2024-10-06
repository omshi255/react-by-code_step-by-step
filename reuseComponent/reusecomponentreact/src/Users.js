import React from 'react'
import './App.css'
export default function Users(props) {
    function getdata()
    {
        alert(props.data.name)
    }
  return (
    <div>
      <span>User {props.data.name}</span>
      <span>User {props.data.email}</span>
      <span>User {props.data.contact}</span>
      <br/>
      <span>User {props.data.name}</span>
      <span>User {props.data.email}</span>
      <span>User {props.data.contact}</span>
      <button onClick={getdata}>Submit</button>

    </div>
  )
}
