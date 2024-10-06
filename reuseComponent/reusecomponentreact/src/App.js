import Users from './Users';
import './App.css';

function App() {


  const users=
  [
    {
      name:'swati', email: 'swati@gmail.com',contact: "1234567890"
      },
      {
        name:'omshi', email: 'omshi@gmail.com',contact: "123456789"
        },
        {
          name:'omii', email: 'omii@gmail.com',contact: "12345678"
          },
          {
            name:'swasthi', email: 'swashti@gmail.com',contact: "1234567"
            },

  ]
  return (
   <>
  
   <h1>Reuse Component with list</h1>
   {
    users.map((item,i)=>
  //  <h2> {item.name}</h2>,
   <h3> <Users data={item} /></h3>
    )
   }
   </>
  );
}

export default App;
