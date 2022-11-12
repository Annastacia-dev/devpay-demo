import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import '../css/Home.css'


const Home = () => {
  return (
    <>
     < NavBar/>
    <div className='home-background'>
      <div className="home-content">
      <h1>
        The Developers Invoicing Solution
      </h1>
      <p>
        Do your development and let us handle the invoicing
      </p>
      <button>
      <Link to='/signin'>Get Started</Link>  
      </button>
      </div>
      </div>
      <Footer />
      </>
      
  )
}

export default Home;