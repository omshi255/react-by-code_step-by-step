import React, { useState } from 'react'
function Login()
{
const [user,setUser]=useState("");
const[password,setPassword]=useState("");
const[Usererr,setUserErr]=useState(false);
const[Passerr,setPassErr]=useState(false);
function LoginHandle(e)
{
    if(user.length<3 || password.length<3)
    {
        alert("type correct Value")
    }
    else
    {
        alert("Hurryy Successfully login")
    }

    e.preventDefault()
}
function UserHandler(e)
{
    let item=e.target.value;
    if(item.length<3 )
    {
       setUserErr(true);
    }
    else
    {
        setUserErr(false);
    }
    setUser(item)
}
function PasswordHandler(e)
{
    let item=e.target.value;
    if(item.length<3 )
    {
       setPassErr(true);
    }
    else
    {
        setPassErr(false);
    }
   setPassword(item)
}
    return(
        <div>
            <h1>login</h1>
           <form action="" onSubmit={LoginHandle} >
             <input type="text" placeholder='Enter User Id' onChange={UserHandler} /> {Usererr?<span style={{color:"red"}}>User Not Valid</span>:""}
            <br/><br/>
            <input type="password" placeholder='Enter User Password' onChange={PasswordHandler} />{Passerr?<span style={{color:"red"}}>UserPassword Not Valid</span>:""}
            <br/><br/>
            <button type='submit' >Login</button>
           </form>
        </div>
    )
}
export default Login;