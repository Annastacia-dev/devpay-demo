import React from 'react'

function Table({name, description,rate,amount, newService, newClient}) {
  return (
    <>
    <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
           <td className="font-bold">Name</td>
            <td className="font-bold">Description</td>
            <td className="font-bold">Hourly Rate</td>
            <td className="font-bold">Total Amount</td>
          </tr>
        </thead>
      <tbody>
      <tr>
        <td>{name}</td>
       <td>{description}</td>
       <td>{rate}</td>
       <td>{amount}</td>
      </tr>


      </tbody>

    </table>
    
    
    
    
    
    
    
    
    </>
  )
}

export default Table