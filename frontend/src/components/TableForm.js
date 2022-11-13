import React from 'react'

function TableForm({
    name,
    setServiceName,
    setRatePerHour,
     rate,
     amount,
     setAmount,
     numberOfHours,
     setNumberOfHours



}) {

    const calculateAmount = (amount)=>{
        setAmount(rate * numberOfHours)
    }
    return (
        <>
        
        <div className="flex flex-col md:mt-16">
            <label htmlFor="name">Service Name</label>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Web development"
                value={name}
                onChange={e => setServiceName(e.target.value)}
            />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="price">Number Of hours</label>
          <input
            type="number"
            name="number_of_hours"
            id="number_of_hours"
            placeholder="40"
            value={numberOfHours}
            onChange={(e) => setNumberOfHours(e.target.value)}
          />
        </div>
        
        
        <div className="md:grid grid-cols-3 gap-10 mt-4">
          <div className="flex flex-col">
            <label htmlFor="rate_per_hour">Rate Per Hour</label>
            <input
              type="number"
              name="rate_per_hour"
              id="rate_per_hour"
              placeholder="500"
              value={rate}
              onChange={e =>setRatePerHour(e.target.value)}
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="amount">Amount(will autopopulate)</label>
            <p>{ calculateAmount(amount)}</p>
          </div>
        </div>
        
        
        
        
        
        
        
        
        
        </>
     

        




    )
}

export default TableForm