import React from 'react'
import './AllFirewalls.css'
import Firewalls from './../SampleData/firewalls.json'
import BranchFirewall from '../BranchFirewall/BranchFirewall'
import { useParams } from 'react-router-dom'

function AllFirewalls() {
    const params = useParams()
    const id= params.id
    console.log(id)
    return (
      <div className='switches_content'>
          <div className='title'>
          Network Switches
          </div>
          
          {id?Firewalls.map(item => {
            if(item.branch == id){
              return <BranchFirewall item={item}/>
            }
          }):Firewalls.map((item,index) => <BranchFirewall key={index} item={item}/>)}
          
      </div>
    )
}

export default AllFirewalls