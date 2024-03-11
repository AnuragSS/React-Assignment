import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Component3 = () =>{

  const [timer,setTimer] = useState('');
  const [count,setCount] = useState(1);
  const newTimer  = `${timer}000`
  const statement = `Timeout in ${timer} seconds | COUNT: ${count}`;
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


  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get('https://api.knowmee.co/api/v1/master/get-country-list');
      setCountries(response.data.responseData); // Adjusted to response.data.responseData
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  return (
    <div>
      <h1>Component 3</h1> 
      <h3>Country List</h3>
      <ul className='countries'>
        {countries.map((country) => (
          <li key={country.country_id}>{country.country_name}</li> 
        ))}
      </ul>
      
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
  );
}

export default Component3;