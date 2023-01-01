import React from 'react'
import './InternetAccounts.css'
import ConnectionDetails from '../ConnectionDetails/ConnectionDetails'
import Internet from './../SampleData/internet.json'
import { useParams } from 'react-router-dom'
import BranchConnections from '../BranchConnections/BranchConnections'

function InternetAccounts() {
  const params = useParams()
  const id= params.id
  console.log(id)
  return (
    <div className='internet_content'>
        <div className='title'>
        Internet Accounts
        </div>
        
        {id?Internet.map(item => {
          if(item.branch == id){
            return <BranchConnections item={item}/>
          }
        }):Internet.map((item,index) => <ConnectionDetails key={index} item={item}/>)}
        
    </div>
  )
}

export default InternetAccounts