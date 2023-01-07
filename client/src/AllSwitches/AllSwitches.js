import React from 'react'
import './AllSwitches.css'
import BranchSwitch from './../BranchSwitch/BranchSwitch'
import { useParams } from 'react-router-dom'
import data from './../SampleData/masterbookData.json'


function AllSwitches() {
  const params = useParams()
  const id= params.id
  console.log(id)
  return (
    <div className='switches_content'>
        <div className='title'>
        Network Switches
        </div>
        
        {id?data.map(item => {
          if(item.branch_code == id){
            return <BranchSwitch item={item}/>
          }
        }):data.map((item,index) => <BranchSwitch key={index} item={item}/>)}
        
    </div>
  )
}

export default AllSwitches