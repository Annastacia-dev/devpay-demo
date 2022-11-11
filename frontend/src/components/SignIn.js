import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import '../css/signup.css'

const SignIn = ({ changeUser }) => {

  const navigate = useNavigate()

  const [error, setError] = useState(null)

  const findCurrentUser = async (email) => {
    const response = await fetch(`http://localhost:9292/developers/${email}`)
    if (response.status === 401) {
      setError('Cannot find user with that username!')
    } else {
      const user = await response.json()
      changeUser(user)
      navigate(`/${user.id}/dashboard`)
    }
   
  }
  
  const [devLogIn, setDevLogIn] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    findCurrentUser(devLogIn)
  }
  const handleChange = e => {
    setDevLogIn(e.target.value)
  }

  return (
    <div>
        {/* SignIn form */}
        <form className="sign-in-form">
            <h1>Sign In</h1>
            <div className="input-field">
                <input type="text" placeholder="Email" value={devLogIn} onChange={handleChange} autoFocus={true} />
                <p style={{color:"red", fontSize: "10px"}}>{error}</p>
                <input type="password" placeholder="Password" autoComplete='true' />
                <button type='submit' className="btn solid"  onClick={handleSubmit}>Sign In</button>
                <div  className='link-to-signup'>
                <p>Don't have an account?
                    <Link to="/signup" className="link">Sign Up</Link>
                </p>
                </div>
                </div>
                </form>
                
    </div>
  )
}


export default SignIn