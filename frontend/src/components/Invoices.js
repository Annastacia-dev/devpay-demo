import React,{ useState} from 'react'
import { Link} from "react-router-dom";
import DashBoardNav from './DashboardNav'
import InvoiceEdit from './InvoiceEdit';

const Invoices = ( { dev} ) => {

    const [edit, setEdit] = useState(false)

    // Sort invoices by date

    const invoices = dev.invoices.sort((a,b) => {
        return new Date(b.date) - new Date(a.date)
    })

    // Delete invoice from database

    const handleDeleteInvoice = (id) => {
        fetch(`http://localhost:9292/invoices/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            window.location.reload()
        })
    }

  return (
    <>
      <div  className='dashboard'>
        <DashBoardNav />
        <div className='invoices'>
            <h1>All Invoices
            <span>
          <button className='add-invoice'>
            <Link to={`/${dev.id}/invoice`}>
            <i className="fa-solid fa-plus"></i>
             Create Invoice
            </Link>
          
          </button>
        </span>
            </h1>
            <div className="invoices-container">
                <div className="invoices-box all" >
            <table>
                <thead>
                    <tr>
                        <th>Invoice</th>
                        <th>Client</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map(invoice => {
                const client = dev.services.find(service => service.id === invoice.service_id).client_id
                const clientName = dev.clients.find(customer => customer.id === client).name


                        const status = invoice.paid ? <span style={{color: "green"}}>Paid</span> : <span style={{color: "red"}}>Pending</span>
                        const amount = invoice.amount.toString().split('').reverse().join('').match(/.{1,3}/g).join(',').split('').reverse().join('')
                        // Date only
                        const date = invoice.date.split('T')[0]
                        // Due date only
                        const dueDate = invoice.due_date.split('T')[0]

                        return (
                            <>
                            <tr key={invoice.id}>
                                <td>{invoice.number}</td>
                                <td>{clientName}</td>
                                <td>${amount}</td>
                                <td>{status}</td>
                                <td>
                                    {date}
                                </td>
                                <td>{dueDate}</td>
                                <td>
                                <button onClick={() => setEdit(!edit)}>{edit ? <i class="fa-regular fa-circle-xmark"></i> : <i className="fa-solid fa-pen"></i>}</button>  
                                </td>
                                <td>
                                    
                                    <button 
                                    style={{marginLeft: "50px"}} 
                                    className="delete"
                                    onClick={() => handleDeleteInvoice(invoice.id)}
                                    >
                                    <i className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                                <td>
                                <InvoiceEdit 
                            dev={dev} 
                            invoice={invoice}
                            edit={edit}
                            setEdit={setEdit}
                             /> 
                                </td>
                            </tr>
                           
                            </>
                            
                        )
                    })}    
                </tbody>
                
            </table>
            </div>
            </div>
        </div>
        </div>
        

    </>
  )
}

export default Invoices