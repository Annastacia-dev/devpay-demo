import React from 'react'

function ClientDetails({ clientName, clientAddress, clientPhone, clientEmail }) {
    return (
        <>

            <section className="mt-10">
                <h2 className="text-2xl uppercase font-bold mb-1">{clientName}</h2>
                <p>{clientAddress}</p>
                <p>{clientEmail}</p>
                <p>{clientPhone}</p>
            </section>

        </>
    )
}

export default ClientDetails