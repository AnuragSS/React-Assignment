import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
const Navbar=()=> {
  return (
    <nav>
        <div className='logo'>
            <Link to='/'>Assignment</Link>
            
        </div>
        <ul>
            <li><Link to='/component1'>Component 1</Link></li>
            <li><Link to='/component2'>Component 2</Link></li>
            <li><Link to='/component3'>Component 3</Link></li>

        </ul>

    </nav>
    
  )
}

export default Navbar
