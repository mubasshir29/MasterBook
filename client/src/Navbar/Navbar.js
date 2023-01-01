import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar_content'>
        <div className='navbar_left_content'>
            <i className="bi bi-list menu-btn"></i>
            <NavLink to='/' >MasterBook</NavLink>
        </div>
        <div className='navbar_right_content'>

        </div>
    </div>
  )
}

export default Navbar