import React from 'react'
import './AllFirewalls.css'
import BranchFirewall from '../BranchFirewall/BranchFirewall'
import { useParams } from 'react-router-dom'
import data from './../SampleData/masterbookData.json'


function AllFirewalls() {
    const params = useParams()
    const id= params.id
    console.log(id)
    return (
      <div className='switches_content'>
          <div className='title'>
          Firewalls
          </div>
          
          {id?data.map(item => {
            if(item.branch_code == id){
              return <BranchFirewall item={item}/>
            }
          }):data.map((item,index) => <BranchFirewall key={index} item={item}/>)}
          
      </div>
    )
}

export default AllFirewalls