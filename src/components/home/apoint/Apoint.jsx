import React from 'react'
import './apoint.css'

const Apoint = () => {
    return (
        <>
            <form className='apoint'>
                <h2>Make Appointment</h2>
                <div className="one">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Your Email' />
                </div>
                <div className="two">
                    <input type="text" placeholder='Courses Type' />
                    <input type="text" placeholder='Car Type' />
                </div>
                <textarea placeholder='Message' cols="30" rows="5"></textarea>
                <input type="button" value="Submit" />
            </form>
        </>
    )
}

export default Apoint
