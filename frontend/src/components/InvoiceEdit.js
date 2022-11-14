import React,{ useState } from 'react'
import '../css/invoiceedit.css'



const InvoiceEdit = ({ invoice, dev, edit, setEdit }) => {

    // Edit Invoice
    // const [edit, setEdit] = useState(false)

    // Edit Invoice form
    const[amount, setAmount] = useState( invoice.amount)
    const [paid, setPaid] = useState(invoice.paid)
    const [dueDate, setDueDate] = useState( invoice.due_date)
    // Edit Invoice form handler

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(false)
        fetch(`http://localhost:9292/invoices/${invoice.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number: invoice.number,
                service_id: invoice.service_id,
                amount: parseInt(amount.replace(/[^0-9.-]+/g,"")),
                paid: paid,
                date:  invoice.date,
                due_date: dueDate
            })
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                window.location.reload()
            })

    }

    // Edit Invoice form

    const editForm = () => {
        return (
            <div className="edit-invoice">
                <form onSubmit={handleEdit}>
                    <label>Amount</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <label>Paid(true or false)</label>
                    <input type="text" value={paid} onChange={(e) => setPaid(e.target.value)} />
                    <label>Due Date</label>
                    <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    <button>
                        Save
                    </button>


                </form>
            </div>
        )
    }
  return (
    <div className="invoice-edit-form">
                    {edit ? editForm() : null}
                    </div>
  )
}

export default InvoiceEdit