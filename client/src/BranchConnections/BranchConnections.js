import React from 'react'
import './BranchConnections.css'
import { useParams } from 'react-router-dom'

function BranchConnections({item}) {
  return (
    <div className='container'>
    <p className='branch_name'>{item.location}</p>
        <div className='connection_cards'>
        {item.connections.map((entry,index)=>(
            <div className='connection_content'>
            <table>
                <tr>
                    <td>Service Provider</td>
                    <td>{entry.provider}</td>
                </tr>
                <tr>
                    <td>Connection Type</td>
                    <td>Shared</td>
                </tr>
                <tr>
                    <td>Account Number</td>
                    <td>{entry.account_no}</td>
                </tr>
                <tr>
                    <td>Account Holder</td>
                    <td>{entry.account_holder}</td>
                </tr>
                <tr>
                    <td>Bandwidth</td>
                    <td>{entry.bandwidth}</td>
                </tr>
                <tr>
                    <td>Support</td>
                    <td>{entry.support}</td>
                </tr>
                <tr>
                    <td>Comments</td>
                    <td>{entry.comments}</td>
                </tr>
            </table>
            </div>
        ))}
        </div>
    </div>
  )
}

export default BranchConnections