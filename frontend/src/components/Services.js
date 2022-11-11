import React from 'react'
import DashBoardNav from './DashboardNav'
import '../css/services.css'

const Services = ( { dev}) => {
  return (
    <div className='dashboard'>
        <DashBoardNav />
        <div className="developer-dashboard services">
            <h1>Projects History</h1>
            <div className="services-container">
                {
                    dev.services.map(service => {
                        return (
                            <div className="service-box" key={service.id}>
                                <h2>{service.name}</h2>
                                <p>{service.description}</p>
                                <p>{service.price}</p>
                            </div>
                        )
                    }
                    )
                }
                </div>
        </div>

    </div>
  )
}

export default Services