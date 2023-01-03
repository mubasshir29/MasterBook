import React from 'react'
import './AllSoftwares.css'
import Softwares from './../SampleData/softwares.json'
import BranchSoftwares from '../BranchSoftwares/BranchSoftwares'
import { useParams } from 'react-router-dom'

function AllSoftwares() {
    const params = useParams()
    const id= params.id
    console.log(id)
    return (
      <div className='switches_content'>
          <div className='title'>
          Softwares
          </div>
          
          {id?Softwares.map(item => {
            if(item.branch == id){
              return <BranchSoftwares item={item}/>
            }
          }):Softwares.map((item,index) => <BranchSoftwares key={index} item={item}/>)}
          
      </div>
    )
}

export default AllSoftwares