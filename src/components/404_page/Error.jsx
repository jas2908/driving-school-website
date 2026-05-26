import React from 'react'
import Back from '../common/Back'
import './error.css'

const Error = () => {
    return (
        <>
            <Back title='404 Error'/>
            <div className="container">
                <div className="error">
                    <i class="fa fa-exclamation-triangle"></i>
                    <h2>404</h2>
                    <h1>Page Not Found</h1>
                    <p>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <button>Go Back To Home</button>
                </div>
            </div>
        </>
    )
}

export default Error
