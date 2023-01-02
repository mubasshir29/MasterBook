import React from 'react'
import './AllSwitches.css'
import Switches from './../SampleData/Switches.json'
import BranchSwitch from './../BranchSwitch/BranchSwitch'
import { useParams } from 'react-router-dom'

function AllSwitches() {
  const params = useParams()
  const id= params.id
  console.log(id)
  return (
    <div className='switches_content'>
        <div className='title'>
        Network Switches
        </div>
        
        {id?Switches.map(item => {
          if(item.branch == id){
            return <BranchSwitch item={item}/>
          }
        }):Switches.map((item,index) => <BranchSwitch key={index} item={item}/>)}
        
    </div>
  )
}

export default AllSwitches