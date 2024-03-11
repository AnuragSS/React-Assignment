import './App.css';
import React from 'react';
import Component2 from './components/Component2'
import Component3 from './components/Component3';
import Component1 from './components/Component1';
import { Route,Routes} from 'react-router-dom';
import './App.css';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';

const App=()=> {

  return (
    <div className="App">
      <Navbar/>
      <div className='appBody'>
      <Routes>
      <Route  path='/component1' element={<Component1 />}  />
      <Route  path='/component2' element={<Component2/>} />
      <Route  path='/component3' element={<Component3/>} />
      </Routes>

    <h1 className='footer'>Use above navigation bar to navigate through components</h1>
      </div>
      
    
    </div>
  );
}

export default App;
