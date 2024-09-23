
import './App.css';

function App() {
//const students=['swati','omshi','omi','shree']
const  students=[
  {
    name:"swati",
    email:"swati@gmail.com",
    number:23456789,
  },
  {
    name:"omshi",
    email:"omshi@gmail.com",
    number:23456789,
  },
  {
    name:"Omiiiii",
    email:"Omiiiii@gmail.com",
    number:23456789,
  }
]
// students.map((item)=>
//   console.warn("My Name is: ",item)
// )
// for(let i=0;i<students.length;i++)
// { 
//   console.warn("My Name is from for loop: ",students[i])

// }
  return (
    <div className="App">
     <h1>Handle Array With List</h1>
     <table border="1">
    <tr>
      <td>name</td>
      <td>email</td>
      <td>Contact no</td>
    </tr>
     {
      students.map((data)=>
     <tr>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.number}</td>
     </tr>
     
    )
     }

</table>
    </div>
  );
}

export default App;
