import React,{useState} from 'react'
import ClientDetails from './ClientDetails'
import Header from './Header'
import Dates from './Dates'
import Job from './Job'
import Developer from './Developer'
import Table from './Table.js'
import TableForm from './TableForm'
import '../css/invoice.css'
import { useNavigate } from 'react-router-dom'

function Invoice( { dev }) {

    const navigate = useNavigate()

   

    const currentDate = new Date().toLocaleDateString()

    const [showInvoice, setShowInvoice] = useState(true)
    const[numberOfHours, setNumberOfHours] = useState(0)
    const[newClient, setNewClient] = useState(null)
    const[newService, setNewService] = useState(null)

    // Client

    const [client, setClient] = useState({
        name: '',
        location: '',
        email: '',
        phone_number: 0
    })

    const handleClientSubmission = (e) => {
        e.preventDefault()
        fetch('http://localhost:9292/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(client)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setNewClient(data.id)
            })
            .catch(error => console.log(error))
            

    }

    const handleClientChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
    }

    // Service

    const [serviceName, setServiceName] = useState('')
    const [description, setDescription] = useState('')
    const [ratePerHour, setRatePerHour] = useState(0)
    const [developerId, setDeveloperId] = useState(dev.id)
    const [clientId, setClientId] = useState(newClient)

    const handleServiceSubmission = (e) => {
        e.preventDefault()
        handleClientSubmission(e)
        console.log("NEW CLIENT:", newClient)
        fetch('http://localhost:9292/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: serviceName,
                description: description,
                rate_per_hour: ratePerHour,
                developer_id: developerId,
                client_id: newClient
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setNewService(data.id)
            }
            )
            // clear form
            // setService({
            //     name: '',
            //     description: '',
            //     rate_per_hour: 0,
            //     developer_id: dev.id,
            //     client_id: newClient
            // })
            // console.log(newService)

    }

    // Invoice

    const [number, setNumber] = useState(0)
    const [amount, setAmount] = useState(0)
    const [dueDate, setDueDate] = useState('')



    const handleInvoiceSubmission = (e) => {
        e.preventDefault()
        handleServiceSubmission(e)
        fetch('http://localhost:9292/invoices', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number: number,
                date: currentDate,
                amount: amount,
                due_date: dueDate,
                paid: false,
                service_id: newService
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            // clear form
            // setNumber(0)
            // setDate(currentDate)
            // setAmount(0)
            // setDueDate('')
            // setPaid(false)
            
    }

const handleSubmit = (e) => {
    e.preventDefault()
    handleInvoiceSubmission(e)
    // navigate(`/${dev.id}/dashboard`)
}







    const handlePrint = () => { window.print() }
    return (
        <>
            <main className='m-5 p-5  max-w-4xl mx-auto bg-white  rounded shadow'>

                {
                    showInvoice ? (
                        <div>
                            <Header handleSubmit={handleSubmit} handlePrint={handlePrint} />
                            <Developer name={dev.name} address={dev.location} email={dev.email} phone={dev.phone_number} />
                            <ClientDetails clientName={client.name} clientAddress={client.location} clientPhone={client.phone_number} clientEmail={client.email} />
                            <Dates invoiceDate={currentDate} invoiceNumber={number} dueDate={dueDate} />
                            < Table description={description}  rate={ratePerHour} amount={amount} name={serviceName} />
                            <Job notes={serviceName} />
                            <button onClick={() => setShowInvoice(false)}
                                className=" mt-3 bg-blue-500 text-white  font-bold py-2 px-8 roundend shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit</button>
                        </div>
                    ) : (
                        <>


                            <div className='flex flex-col justify-center'>
                                <article className="md:grid grid-cols-2 gap-10">
                                    <div className="flex flex-col">
                                        <h2>{dev.name}</h2>
                                        <p>{dev.location}</p>
                                        <p>{dev.email}</p>
                                        <p>{dev.phone_number}</p>
                                    </div>
                                    </article>

                                <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                                    <div className="flex flex-col">
                                        <label htmlFor="name">Enter your client's name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="John Doe"
                                            autoComplete="off"
                                            value={client.name}
                                            onChange={handleClientChange}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="location">
                                            Enter your client's location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            id="location"
                                            placeholder="Kisumu"
                                            autoComplete="off"
                                            value={client.location}
                                            onChange={handleClientChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="email">Enter your client's email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="johndoe@gmail.com"
                                            autoComplete="off"
                                            value={client.email}
                                            onChange={handleClientChange}
                                        />
                                    </div>
                                     <div className="flex flex-col">
                                        <label htmlFor="phone_number">Enter your client's phone number</label>
                                        <input
                                            type="text"
                                            name="phone_number"
                                            id="phone_number"
                                            placeholder="254712345678"
                                            autoComplete="off"
                                            value={client.phone_number}
                                            onChange={handleClientChange}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <button className='add' onClick={handleClientSubmission}>
                                            Add Client
                                        </button>
                                    
                                    </div>
                                </article>

                                <article className="md:grid grid-cols-3 gap-10 mt-4">
                                    <div className="flex flex-col">
                                        <label htmlFor="number">Enter Invoice Number</label>
                                        <input
                                            type="text"
                                            name="number"
                                            id="number"
                                            placeholder="653"
                                            autoComplete="off"
                                            value={number}
                                            onChange={e => setNumber(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="invoiceDate">Invoice Date</label>
                                        <p>
                                            {currentDate}
                                        </p>
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="due_date">Due Date</label>
                                        <input
                                            type="date"
                                            name="due_date"
                                            id="due_date"
                                            placeholder="Invoice Date"
                                            autoComplete="off"
                                            value={dueDate}
                                            onChange={e => setDueDate(e.target.value)}
                                        />
                                    </div>
                                </article>

                                <article>
                                    <TableForm
                                       name={serviceName}
                                       setServiceName={setServiceName}
                                        rate={ratePerHour}
                                        amount={amount}
                                       setAmount={setAmount}
                                       numberOfHours={numberOfHours}
                                        setNumberOfHours={setNumberOfHours}
                                        setRatePerHour={setRatePerHour}
                                        
                                       
                                    />
                                </article>


                                <label htmlFor="description">Service Description</label>
                                <textarea
                                    type="text"
                                    name="description"
                                    id="description"
                                    cols="30"
                                    rows="10"
                                    autoComplete='off'
                                    placeholder='Created Kula app, a website that...'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}>

                                </textarea>
                                <div className="flex flex-col">
                                        <button className='add' onClick={handleServiceSubmission}>
                                            Add Service
                                        </button>
                                    
                                    </div>
                                <span>
                                    
                                    <button className='add' onClick={handleSubmit}>
                                        Send
                                    </button>
                                </span>
                                <button onClick={() => setShowInvoice(true)}
                                    className="bg-blue-500 text-white  font-bold py-2 px-8 roundend shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                                    >Preview</button>

                            </div>

                        </>


                    )}

            </main>


        </>
    )

}


export default Invoice