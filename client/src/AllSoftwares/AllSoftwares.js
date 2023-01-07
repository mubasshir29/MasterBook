import React from 'react'
import './AllSoftwares.css'
import BranchSoftwares from '../BranchSoftwares/BranchSoftwares'
import { useParams } from 'react-router-dom'
import data from './../SampleData/masterbookData.json'


function AllSoftwares() {
    const params = useParams()
    const id= params.id
    console.log(id)
    return (
      <div className='switches_content'>
          <div className='title'>
          Softwares
          </div>
          
          {id?data.map(item => {
            if(item.branch_code == id){
              return <BranchSoftwares item={item}/>
            }
          }):data.map((item,index) => <BranchSoftwares key={index} item={item}/>)}
          
      </div>
    )
}

export default AllSoftwares