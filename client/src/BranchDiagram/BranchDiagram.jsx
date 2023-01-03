import React from 'react'
import './BranchDiagram.css'

function BranchDiagram({item}) {
  return (
    <div className='container'>
      <p className='branch_name'>{item.location}</p>
      <div className='b_diagram_content'>
          <img src={item.image} />
      </div>
    </div>
  )
}

export default BranchDiagram