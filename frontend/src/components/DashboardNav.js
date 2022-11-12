import React from 'react'
import '../css/dashboardnav.css';



const DashBoardNav = () => {
  return (
    <>
     <div className="dashboard-container">
        <div className="dashboard-navigation">
                <ul className="list">
                <li className="list-item logo">
                <i className="fa-solid fa-circle-dollar-to-slot"></i>
                 <p className="text">DevPay</p>
                </li>
                    <li className="list-item">
                        <a href="dashboard">
                            <span>
                            <i className="fa-solid fa-chalkboard"></i>
                            </span>
                            <span className="text">Dashboard</span>
                        </a>
                    </li>
                    <li className="list-item">
                        <a href="invoices">
                            <span>
                            <i className="fa-solid fa-file-invoice"></i>
                            </span>
                            <span className="text">Invoices</span>
                        </a>
                    </li>
                     <li className="list-item">
                        <a href="services">
                            <span>
                            <i className="fa-solid fa-server"></i>
                            </span>
                            <span className="text">Services</span>
                        </a>
                    </li>
                     <li className="list-item">
                        <a href="clients">
                            <span>
                            <i className="fa-solid fa-user-group"></i>
                            </span>
                            <span className="text">Clients</span>
                        </a>
                    </li>
                     <li className="list-item">
                        <a href="profile">
                            <span>
                            <i className="fa-solid fa-user"></i>
                            </span>
                            <span className="text">Profile</span>
                        </a>
                    </li>
                     <li className="list-item" id="logout">
                        <a href="/">
                            <span>
                            <i className="fa-solid fa-arrow-right-from-bracket" ></i>
                            </span>
                            <span className="text">Log Out</span>
                        </a>
                    </li>
                </ul>
        </div>
    </div>
    </>
  )
}

export default DashBoardNav