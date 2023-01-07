import React from 'react'
import './SidebarItem.css'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function SidebarItem({item}) {
    const [open,setOpen] = useState(false)
  return (
    <div className={open? "sidebar-item open":"sidebar-item"}>
        <div className='sidebar-title'>
            <span>
                <i className={item.icon}></i>
                <Link to={item.path}>{item.title}</Link>
            </span>
            { item.childrens && <i className="bi bi-caret-down-fill toggle-btn" onClick={()=>{setOpen(!open)}}></i>}
        </div>
        {item.childrens && <div className="sidebar-content">
            { item.childrens.map(entry => (<div><Link to={entry.path}><i className={entry.icon}></i>{entry.title}</Link></div>)) }
            
        </div>}
    </div>
  )
}

export default SidebarItem