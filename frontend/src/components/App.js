import React,{useEffect,useState} from 'react'
import { Route,Routes} from "react-router-dom";
import Invoice from './Invoice';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignUp'
import Dashboard from './Dashboard';
import Invoices from './Invoices';
import Services from './Services';
import Clients from './Clients';
import Profile from './Profile';
import Home from './Home';

function App () {


  const [currentUser, setCurrentUser] = useState(null)

  const changeUser = (user) => {
    setCurrentUser(user)
  }

  // Set developer as user , fetch user from database https://9292/developers

  const [developers, setDevelopers] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/developers')
      .then(response => response.json())
      .then(data => setDevelopers(data))
  }, [])

  return (
    
    <div>
    
    
      <Routes>

        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About user={currentUser} />} ></Route>
        <Route path="/signin" element={<SignIn changeUser={changeUser} />} />
        <Route path="/signup" element={<SignUp />} />      
        {
          developers.map(dev => {
            return (
              < >
              
            <Route key={dev.id} path={`/${dev.id}/invoice`} element={<Invoice dev={dev}  />} />
            <Route key={dev.id} path={`/${dev.id}/dashboard`} element={<Dashboard dev={dev} />} />
            <Route key={dev.id} path={`/${dev.id}/invoices`} element={<Invoices dev={dev} />} />
            <Route key={dev.id} path={`/${dev.id}/services`} element={<Services dev={dev} />} />
            <Route key={dev.id} path={`/${dev.id}/clients`} element={<Clients dev={dev} />} />
            <Route key={dev.id} path={`/${dev.id}/profile`} element={<Profile dev={dev} />} />
            </>
            )
          }
          )
        }
      </Routes>  
    </div>
  )
}

export default App