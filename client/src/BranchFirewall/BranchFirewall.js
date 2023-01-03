import React from 'react'
import './BranchFirewall.css'

function BranchFirewall({item}) {
    return (
        <div className='container'>
        <p className='branch_name'>{item.location}</p>
                <div className='firewall_content'>
                <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Software</th>
                        <th>Management IP</th>
                      </tr>
                    </thead>
                    <tbody>
                    {item.firewalls.map((entry,index)=>(
                      <tr>
                        <td>{entry.name}</td>
                        <td>{entry.model}</td>
                        <td>{entry.software}</td>
                        <td>{entry.management_ip}</td>
                      </tr>
                    ))}
                    </tbody>
                </table>
                </div>
        </div>
      )
}

export default BranchFirewall