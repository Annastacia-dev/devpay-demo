import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()

    const [developer, setDeveloper] = useState({
        name: '',
        email: '',
        password: '',
        location: '',
        phone_number: ''
    })

    const [errors, setErrors] = useState(null)

    const handleSubmission = (e) => {
        e.preventDefault()

        if (developer.name.length < 3) {
            setErrors('Name must be at least 3 characters long')
        } else if (developer.email.length < 3) {
            setErrors('Email must be at least 3 characters long')
        } else if (developer.password.length < 3) {
            setErrors('Password must be at least 3 characters long')
        } else if (developer.location.length < 3) {
            setErrors('Location must be at least 3 characters long')
        } else if (developer.phone_number.length < 3) {
            setErrors('Phone Number must be at least 3 characters long')
        } else {


        fetch('http://localhost:9292/developers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(developer)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        // clear form
        setDeveloper({
            name: '',
            email: '',
            password: '',
            location: '',
            phone_number: ''
        })
        navigate('/signin')
    }
    }

    const handleChange = (e) => {
        setDeveloper({
            ...developer,
            [e.target.name]: e.target.value
        })
    }


  return (
    <div>
    {/* SignIn form */}
    <form className="sign-in-form" style={{marginTop: "50px"}}>
        <h1>Sign Up</h1>
        <div className="input-field">
            <input name="name" type="text" placeholder="Name"  autoFocus={true} value={developer.name} onChange={handleChange} />
            <input name="email" type="text" placeholder="Email"  autoFocus={true} value={developer.email} onChange={handleChange} />
            <input name="phone_number" type="text" placeholder="Phone Number"  autoFocus={true} value={developer.phone_number} onChange={handleChange} />
            <input name="location"type="text" placeholder="Location"  autoFocus={true} value={developer.location} onChange={handleChange} />
            <input name="password"type="password" placeholder="Password" autoComplete='true' value={developer.password} onChange={handleChange} />
            <p>{errors}</p>
            <button type='submit' className="btn solid" onClick={handleSubmission}>Sign Up</button>
            <div  className='link-to-signup'>
            <p>Aleady have an account?
                <Link to="/signin" className="link">Sign In</Link>
            </p>
            </div>
            </div>
            </form>
            
</div>
  )
}

export default SignUp