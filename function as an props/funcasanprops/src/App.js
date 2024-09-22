import './App.css';
import User from './User';
import Members from './Members';
function App() 
{
function getData()
{
  alert("hello from Users.js")
}
function getData2()
{
  alert("hello from Members.js")
}

  return (
    <div className="App">
    <User data={getData}/>
<div>
  <Members data={getData2}/>
</div>
    </div>
  );
}

export default App;
