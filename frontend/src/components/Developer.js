import React from 'react'

function Developer({ name, address, email, phone }) {
    return (
        <>
            <section className='flex  flex-col items-end justify-end'>
                <h4 className="text-2xl uppercase font-bold mb-1">{name}</h4>
                <h5>{address}</h5>
                <h6>{email}</h6>
                <h6>{phone}</h6>
            </section>


        </>
    )
}

export default Developer