import React from 'react'

export default function Propfunc(props) {
    console.log(props.name)
  return (
    <div style= {{backgroundColor:"skyblue",margin:10}}>
      <h1>Hello {props.name}</h1>
      {/* <h2>email is: {props.email}</h2>
      <h4>Address:{props.other.address}</h4>
      <h4>mo number:{props.other.monumber}</h4> */}
    </div>
  )
}
