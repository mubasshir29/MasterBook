import React from 'react'
import './NetworkDiagrams.css'
import diagrams from './../SampleData/diagrams.json'
import BranchDiagram from '../BranchDiagram/BranchDiagram'
import { useParams } from 'react-router-dom'
import data from './../SampleData/masterbookData.json'

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
        data.map(item => {
          if(item.branch_code == id){ 
          return <BranchDiagram item={item} />
        }
        }) :data.map(item => <BranchDiagram item={item} />)}
    </div>
    
  )
}

export default NetworkDiagrams