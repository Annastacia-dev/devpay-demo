import React from 'react'
import DashBoardNav from './DashboardNav'
import '../css/profile.css'

const Profile = ({ dev }) => {

    // Edit profile

    const [edit, setEdit] = React.useState(false)

    // Edit profile form

    const [name, setName] = React.useState(dev.name)
    const [email, setEmail] = React.useState(dev.email)
    const [phone_number, setPhone_number] = React.useState(dev.phone_number)
    const [location, setLocation] = React.useState(dev.location)
    const [password, setPassword] = React.useState(dev.password)



    // Edit profile form handler

    const handleEdit = (e) => {
        e.preventDefault()
        setEdit(false)
        fetch(`http://localhost:9292/developers/${dev.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone_number: phone_number,
                location: location,
                password: password
            })
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                window.location.reload()
            })

    }

    // Edit profile form

    const editForm = () => {
        return (
            <div className="edit-profile">
                <form onSubmit={handleEdit}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Phone Number</label>
                    <input type="text" value={phone_number} onChange={(e) => setPhone_number(e.target.value)} />
                    <label>Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>Save</button>
                </form>
            </div>
        )
    }

  return (
    <div className='dashboard'>
        <DashBoardNav />

        <div className="developer-dashboard profile">
            <h1>Profile
            </h1>
            <div className='edit'>
            <button className='edit-btn' onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit"}</button>
            </div>
            <div className="profile-container">
                <div className="profile-info">
                    <h2>Name</h2>
                    <p>{dev.name}</p>
                    <h2>Email</h2>
                    <p>{dev.email}</p>
                    <h2>Phone Number</h2>
                    <p>+{dev.phone_number}</p>
                    <h2>Location</h2>
                    <p>{dev.location}</p>
                    </div>
                    <div className="edit-form">
                    {edit ? editForm() : null}
                    </div>
                
             </div>
             </div>
    </div>
  )
}

export default Profile