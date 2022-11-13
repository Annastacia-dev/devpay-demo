import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='error-page'>
        {/* Error GIF */}
        <h1>
            404 Page Not Found
        </h1>

        <Link to='/'>
            <button>
                Go Back
            </button>
        </Link>




    </div>
  )
}

export default Error