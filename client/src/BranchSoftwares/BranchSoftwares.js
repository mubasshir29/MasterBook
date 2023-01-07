import React from 'react'
import './BranchSoftwares.css'

function BranchSoftwares({item}) {
  return (
    <div className='container'>
    <p className='branch_name'>{item.location}</p>
            <div className='switch_content'>
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Access URL</th>
                    <th>Username</th>
                    <th>Password</th>
                  </tr>
                </thead>
                <tbody>
                {item.assets.softwares.map((entry,index)=>(
                  <tr>
                    <td>{entry.name}</td>
                    <td>{entry.access_url}</td>
                    <td>{entry.username}</td>
                    <td>{entry.password}</td>
                  </tr>
                ))}
                </tbody>
            </table>
            </div>
    </div>
  )
}

export default BranchSoftwares