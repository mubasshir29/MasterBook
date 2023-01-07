import React from 'react'
import './Wireless.css'
import wireless from './../SampleData/wireless.json'
import { useParams } from 'react-router-dom'
import BranchWireless from '../BranchWireless/BranchWireless'
import data from './../SampleData/masterbookData.json'


function Wireless() {
    const params = useParams()
    const id= params.id
    console.log(id)
    console.log("Wireless:",wireless)
  return (
    <div className='wireless_content'>
        <div className='title'>
        Wireless Network
        </div>
        
        {id?data.map(item => {
          if(item.branch_code == id){
            return <BranchWireless item={item}/>
          }
        }):data.map((item,index) => <BranchWireless key={index} item={item}/>)}
        
    </div>
  )
}

export default Wireless