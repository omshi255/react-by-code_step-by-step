import React from 'react'

export default function Userjsx() {
  function add()
  {
    const a=100;
    const b=30;
    const c=a+b
    return c;
  }
  return (
    <>
      <h1>JSX !</h1>
      {10+20 }
      <br/>
      {add()}
    </>
  )
}
