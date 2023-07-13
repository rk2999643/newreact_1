import React, {useState} from 'react';
import './App.css';
import FunComponent from './Component/FunComponent';
import ClassComponent from './Component/ClassComponent';

function App() {
  const [fState,setfstate] = useState(false);
  const [cState,setCstate] = useState(false)
  console.log(fState);

  return (
    <div className='mainn'>
      <h1 className='heading'>Styling using class component and function component</h1>
      <button className='funbutton' onClick={()=> setfstate(!fState)}>TO see Styling in function component</button>
      <button className='classbutton' onClick={()=> setCstate(!cState)}>TO see Styling in class component</button>
{/* {      fState? <FunComponent/> : ""
}      <ClassComponent/> */}
       { fState && <FunComponent/>}
       { cState && <ClassComponent/>}
    </div>
  );
}

export default App;
