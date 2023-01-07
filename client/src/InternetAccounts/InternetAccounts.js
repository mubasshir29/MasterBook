import React from 'react'
import './InternetAccounts.css'
import ConnectionDetails from '../ConnectionDetails/ConnectionDetails'
//import Internet from './../SampleData/internet.json'
import { useParams } from 'react-router-dom'
import BranchConnections from '../BranchConnections/BranchConnections'
import data from './../SampleData/masterbookData.json'

function InternetAccounts() {
  //const Internet = data.map(entry => entry.assets.internet_accounts)
  const params = useParams()
  const id= params.id
  return (
    <div className='internet_content'>
        <div className='title'>
        Internet Accounts
        </div>
        
        {id?data.map(item => {
          if(item.branch_code == id){
            return <ConnectionDetails item={item}/>
          }
        }):data.map((item,index) => <ConnectionDetails key={index} item={item}/>)}
        
    </div>
  )
}

export default InternetAccounts