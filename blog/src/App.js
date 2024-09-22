// import UsersClass from './UsersClass'
import './App.css';
import Propfunc from './Propfunc';
// import Users from './Users';
// import Userjsx from './Userjsx';
 import React, {useState} from 'react'
 import toggle from './toggle'
//  function App() {
// //    const [data,setData]=useState(0)

// //   // function apple()
// //   // {
// //   //   data="peter"
// //   //   alert(data);
// //   //   console.log("clicked")
// //   // }
// // function updateData()
// // {
// //   // alert("updated")
// //   setData(data+1)

// // }
// const [name,setName]=useState("anil")
//   return (
//     <>
//     {/* <h1>Hello World</h1> */}
//     {/* <h2>{data}</h2> */}
//     {/* <h1>State in React!</h1> */}
//     {/* <h2>{data}</h2> */}
//  {/* <Users/>
//  <UsersClass/>
//  <Userjsx/> */}
//  {/* <button onClick={apple} >Click Me</button> */}
//  {/* <button onClick={apple} >Click22 Me</button> */}
//  {/* <button onClick={updateData} >Update Data</button> */}
//  {/* <UsersClass/> */}
//  <h2>Props in React</h2>
//  <Propfunc name={name}/>
//  {/* <Propfunc name={"swatisen"} email="swati@gmail.com" other={{address:"delhi",monumber:"123456789"}} /> */}
//  {/* <Propfunc name={"omshisen"}   email="omshi@gmail.com" other={{address:"delhi",monumber:"123456789"}} />
//  <Propfunc name={"omiiiiiisen"}  email="omuuuu@gmail.com" other={{address:"delhi",monumber:"123456789"}} />  */}
//  <button onClick={()=>{
//   setName("Swati")
//  }} >Update Name</button>
//     </>
//   );
// }
function App() {

  const [status,setStatus]=React.useState(false)
// const[data,Setdata]=useState(null)
// const[print,Setprint]=useState(false)
// function getdata(val)
// { 
//    console.log(val.target.value)
//   Setdata(val.target.value)
// }
  return (
    // <div className="App">
    //   {
    //     print?
    //     <h1>{data}</h1>
    //     :null
    //   }
    //   <h1>Get Input Box Value !</h1>
    //   <input type="text" onChange={getdata} />
    //   <button onClick={()=>Setprint(true)}>Print Data</button>
    //   <input type="checkbox" onChange={getdata} name="swati" id="myytab"/>
    //   input
    // </div>
    <>
    <div className="App">
   {
    status? <h1>Hello World !</h1>:null
   }
    </div>
    {/* <button onClick={()=>setStatus(false)} >Hide</button>
    <button onClick={()=>setStatus(true)} >Show</button> */}
    <button onClick={()=>setStatus(!status)}>Toggle</button>
    </>
  )
}

export default App;
