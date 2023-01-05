import React from 'react'
import './Home.css'
import dashboard from './../SampleData/DashboardCardsData.json'
import sw_vendors from './../SampleData/DashboardSwitchVendors.json'
import fw_vendors from './../SampleData/DashboardFirewallVendors.json'
import controller_vendors from './../SampleData/DashboardControllerVendors.json'
import ap_vendors from './../SampleData/DashboardAPVendors.json'
import Colors from '../SampleData/ColorList'

function Home() {
  return (
    <div className='homepage_content'>
        <div className='title'>
          Dashboard
        </div>

        <div className='dashboard_title'>
          <h6>Devices</h6>
        </div>
        
        <div className='cards_container'>
                <div className='dashboard_card' style={{backgroundColor:Colors[0]}}><span className='title'>Controllers</span><span className='title_value'>{dashboard.controller}</span></div>
                <div className='dashboard_card' style={{backgroundColor:Colors[1]}}><span className='title'>Firewalls</span><span className='title_value'>{dashboard.firewalls}</span></div>
                <div className='dashboard_card' style={{backgroundColor:Colors[2]}}><span className='title'>Access Points</span><span className='title_value'>{dashboard.access_points}</span></div>
                <div className='dashboard_card' style={{backgroundColor:Colors[3]}}><span className='title'>Internet</span><span className='title_value'>{dashboard.internet_accounts}</span></div>
        </div>
      <div className='dashboard_title'>
        <h6>Vendors</h6>
      </div>
      <div className='vendors'>
      <div className='vendors_container'>
      <table>
        <thead>
            <tr>
              <th>Vendor</th>
              <th>Qty</th>
            </tr>
        </thead>
          {sw_vendors.map(item => (
            <tr>
            <td>{item.vendor}</td>
            <td>{item.count}</td>
            </tr>
          ))}
          </table>
      </div>
      <div className='vendors_container'>
      <table>
      <thead>
            <tr>
              <th>Vendor</th>
              <th>Qty</th>
            </tr>
        </thead>
          {fw_vendors.map(item => (
            <tr>
            <td>{item.vendor}</td>
            <td>{item.count}</td>
            </tr>
          ))}
          </table>
      </div>
      <div className='vendors_container'>
          <table>
          <thead>
            <tr>
              <th>Vendor</th>
              <th>Qty</th>
            </tr>
        </thead>
          {controller_vendors.map(item => (
            <tr>
            <td>{item.vendor}</td>
            <td>{item.count}</td>
            </tr>
          ))}
          </table>
      </div>
      <div className='vendors_container'>
      <table>
      <thead>
            <tr>
              <th>Vendor</th>
              <th>Qty</th>
            </tr>
        </thead>
          {ap_vendors.map(item => (
            <tr>
            <td>{item.vendor}</td>
            <td>{item.count}</td>
            </tr>
          ))}
          </table>
      </div>
      </div>
    </div>
  )
}

export default Home