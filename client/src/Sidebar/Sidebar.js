import React from 'react'
import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem'
import items from './../data.json'

function Sidebar() {
  return (
    <div className='sidebar_content'>
        <div className='searchbar_content'>
            <i class="bi bi-search"></i>
            <input className='search_bar' placeholder='Search...'></input>
        </div>
        {items.map((item,index) => <SidebarItem key={index} item={item}/> )}
        
    </div>
  )
}

export default Sidebar