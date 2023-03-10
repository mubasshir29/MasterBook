import React from 'react'
import './BranchWireless.css'

function BranchWireless({item}) {
  return (
    <div className='container'>
    <p className='branch_name'>{item.location}</p>
            <p className='table_title'>Wireless Controller</p>
            <div className='controller_content content'>
                <table className='controller_table table'>
                    <thead>
                        <tr>
                            <th>Hostname</th>
                            <th>Management IP</th>
                            <th>Model</th>
                            <th>Software</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.assets.wireless.controllers.map(wlc => (
                            <tr>
                            <td>{wlc.name}</td>
                            <td>{wlc.ip}</td>
                            <td>{wlc.model}</td>
                            <td>{wlc.software}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className='table_title'>Access Points</p>
            <div className='ap_content content'>
                
                <table className='ap_table table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>IP Address</th>
                            <th>Model</th>
                            <th>MAC Address</th>
                            <th>Serial No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.assets.wireless.access_points.map(entry =>(
                            <tr>
                                <td>{entry.ap_name}</td>
                                <td>{entry.ap_ip}</td>
                                <td>{entry.ap_model}</td>
                                <td>{entry.ap_mac_address}</td>
                                <td>{entry.ap_serial}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className='table_title'>SSID's</p>
            <div className='ssid_content content'>
                
                <table className='ssid_table table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {item.assets.wireless.ssids.map(entry =>(
                            <tr>
                                <td>{entry.name}</td>
                                <td>{entry.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default BranchWireless