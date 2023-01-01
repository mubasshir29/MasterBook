import React from 'react'
import './NetworkDiagrams.css'
import diagrams from './../SampleData/diagrams.json'
import BranchDiagram from '../BranchDiagram/BranchDiagram'
import { useParams } from 'react-router-dom'

function NetworkDiagrams() {
  const params = useParams()
  const id= params.id;
  console.log(id)
  return (
    <div className='diagram_content'>
        <div className='title'>
        Network Diagrams
        </div>
        {id?
        diagrams.map(item => {
          if(item.branch == id){ 
          return <BranchDiagram item={item} />
        }
        }) :diagrams.map(item => <BranchDiagram item={item} />)}
    </div>
    
  )
}

export default NetworkDiagrams