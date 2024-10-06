import React from 'react'
import { useState } from 'react'
export default function Profile() {

    const[loggedIn,setLoggedIn]=useState(1)
    //1,2,3
    return (
        <div>
         {loggedIn==1? <h1>Welcome user1</h1>
         :loggedIn==2? <h1>welcome user2</h1> 
         : <h1>welcome user3</h1>}
        </div>
      )
  
}
