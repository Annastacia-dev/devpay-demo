import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/NavBar.css'


function NavBar() {
    return (
        <>
            <Navbar className="navbar" bg="light" expand="lg" style={{width: "100%"}}>
                <Container>
                    <NavLink  className= "nav-link  fw-bold fs-1" to="/">
                        <span id='logo' >
                        <i className="fa-solid fa-circle-dollar-to-slot"></i>
                         DevPay
                        </span>
                        
                        </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <li className="nav-item me-4">
                                <NavLink className="nav-link  fw-bold fs-5" aria-current="page" end to="/">Home</NavLink>
                            </li>
                            <li className="nav-item me-4 fw-bold  fs-5" >
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <div  className='nav-item my-2 my-md-0 ml-auto'>
                            <NavLink className="btn btn-outline-dark me-5 mx-auto mr-4 ml-2" to="/signup">
                                Sign Up</NavLink>
                           </div> 
                           <div  className='nav-item my-2 my-md-0 ml-auto'>
                            <NavLink className="btn btn-outline-dark me-5 mx-auto mr-4 ml-2" to="/signin">
                                Sign In</NavLink>
                           </div> 
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default NavBar