import React from 'react'
import DashBoardNav from './DashboardNav'
import '../css/clients.css'

const Clients = ( { dev}) => {

  return (
    <div className='dashboard'>
        <DashBoardNav />
        <div className="developer-dashboard clients">
            <h1 style={{marginLeft: "-180px", marginBottom: "60px"}}>Clients history</h1>
            <div className="clients-container">

                {/* Table with name, email, phone-number and address */}

                <table>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {
                            dev.clients.map(client => {
                                return (
                                    <tr key={client.id}>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>+{client.phone_number}</td>
                                        <td>{client.location}</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>






               </div>




            </div>
        </div>
  )
}

export default Clients