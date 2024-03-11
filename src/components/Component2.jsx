import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Component2=()=> {
    const [timer,setTimer] = useState('');
    const [count,setCount] = useState(1);
    const [text,setText] = useState('');
    const newTimer  = `${timer}000`
    const condition = `${text===''? 'Empty toast message': text } | Count: ${count}`
    const success = () =>{
      setCount((event)=>event+1)
     toast.success(condition, {
      position: "bottom-center",
      autoClose: {newTimer},
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
    }

    const error = () =>{
      setCount((event)=>event+1)
     toast.error(condition, {
      position: "bottom-center",
      autoClose: {newTimer},
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
      });
    }

    const notification = () =>{
      {text==='' ? error() : success()}
    };

    


  return (
    <div style={{
        alignItems:'center',
        textAlign:'center'
        }}>
            <h1>Component 2</h1>

            <input type='number' value={timer} onChange={(event)=>setTimer(event.target.value)} 
        placeholder='type a number'/><br></br>

        <input type='text' value={text} onChange={(event)=>setText(event.target.value)} 
        placeholder='type a message for toast'/><br/>

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

            <i><h3>Notification set for {timer===''?'4':timer} seconds </h3></i>
            
            

    </div>
  )
}

export default Component2
