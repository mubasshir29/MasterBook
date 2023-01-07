import React from 'react'
import './BranchSwitch.css'

function BranchSwitch({item}) {
  return (
    <div className='container'>
    <p className='branch_name'>{item.location}</p>
            <div className='switch_content'>
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>IP Address</th>
                    <th>Model</th>
                    <th>Serial No</th>
                    <th>Software</th>
                  </tr>
                </thead>
                <tbody>
                {item.assets.switches.map((entry,index)=>(
                  <tr>
                    <td>{entry.switch_name}</td>
                    <td>{entry.ip_address}</td>
                    <td>{entry.model}</td>
                    <td>{entry.serial_no}</td>
                    <td>{entry.software}</td>
                  </tr>
                ))}
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default BranchSwitch