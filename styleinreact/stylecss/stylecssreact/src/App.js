import './style.css'
import './App.css';
import style from './custom.module.css'
import {Button} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1 className='
      primary'>Style Type in React 1</h1>
      <br/>
      <h1 style={{color:'red',backgroundColor:'black'}} >style type in react 2</h1>
      <br/>
      <h1 className={style.success}>style type in react 3</h1>
    </div>
  );
}

export default App;
