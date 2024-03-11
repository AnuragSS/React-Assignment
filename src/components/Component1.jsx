import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Component1=()=> {
    const [timer,setTimer] = useState('');
    const [count,setCount] = useState(1);
    const newTimer  = `${timer}000`
    const statement = `Task Executed | COUNT: ${count}`;
    const notification = () =>{
      setCount((event)=>event+1)
     toast.success(statement, {
      position: "bottom-center",
      autoClose: {newTimer},
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
      
    };
  return (
    <div>
        <h1>Component 1</h1>
      <input type='number' value={timer} onChange={(event)=>setTimer(event.target.value)} 
      placeholder='type a number'/><br/>
      <button onClick={notification } >Show toast Message</button>
      <ToastContainer
      position="bottom-center"
      autoClose= {timer!=='' ? newTimer : '4000'}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" />

    <i><h3>Notification set for {timer==='' ? '4' : timer} seconds </h3></i>
    
    
   
    
    </div>
  )
}

export default Component1
