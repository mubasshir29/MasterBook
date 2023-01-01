import React from 'react'
import './BranchDiagram.css'

function BranchDiagram({item}) {
  return (
    <div className='container'>
    <div className='b_diagram_content'>
        <p className='branch_name'>{item.location}</p>
        <img src={item.image} />
    </div>
    </div>
  )
}

export default BranchDiagram