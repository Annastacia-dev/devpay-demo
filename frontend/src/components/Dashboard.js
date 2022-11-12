import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from './DashboardNav'
import '../css/dashboard.css'

const Dashboard = ( { dev }) => {

//  sort invoices by date, return first 3 invoices

    const invoices = dev.invoices.sort((a,b) => {
        return new Date(b.date) - new Date(a.date)
    }).slice(0,3)



  return (
    <>
    <div className='dashboard'>
    <DashboardNav />

    <div className='developer-dashboard'>

        <h1>Welcome {dev.name}
        <span>
          <button className='add-invoice'>
            <Link to={`/${dev.id}/invoice`}>
            <i className="fa-solid fa-plus"></i>
             Create Invoice
            </Link>
          
          </button>
        </span>
        </h1>
        <div className='stats'>
          <h1>Statistics Overview</h1>
          <div className='stats-container'>
            <div className='stats-box'>
              <h2>Clients</h2>
              <h3>{dev.clients.length}
              </h3>
              </div>
              <div className='stats-box'>
              <h2>Services</h2>
              <h3>{dev.services.length}</h3>
              </div>
              <div className='stats-box' style={{borderRight: "0px"}}>
              <h2>Invoices</h2>
              <h3>{dev.invoices.length}</h3>
              </div>
              </div>
        </div>

        <div className='invoices'>
          <h1>Recent Invoices</h1>
          <div className='invoices-container'>
            <div className='invoices-box' >
              {/* Table */}

              <table>
                <thead>
                  <tr>
                    <th>Invoice Number</th>
                    <th>Client</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Due Date</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                       
                       invoices.map(invoice => {

              const client = dev.services.find(service => service.id === invoice.service_id).client_id
              const clientName = dev.clients.find(cli => cli.id === client).name

              const amount = invoice.amount.toString().split('').reverse().join('').match(/.{1,3}/g).join(',').split('').reverse().join('')

              const status = invoice.paid ? <span style={{backgroundColor: "green",borderRadius:"3px" ,padding:"5px"}}>Paid</span> : <span style={{backgroundColor: "red",borderRadius:"3px" ,padding:"5px"}}>Pending</span>
                      return (
                        <tr key={invoice.id}>
                          <td style={{paddingLeft: "40px"}}>{invoice.number}</td>
                            <td>{clientName}</td>
                          <td>${amount}</td>
                          <td>{status}</td>
                          <td>
                            {invoice.date.split('T')[0]}
                          </td>
                          <td>{invoice.due_date.split('T')[0]}</td>
                        </tr>
                      )
                    })}
                    </tbody>
                </table>
              </div>
              </div>
              </div>


    </div>
    </div>
    
    </>
  )
}

export default Dashboard