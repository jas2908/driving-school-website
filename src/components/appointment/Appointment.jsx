import React from 'react'
import Heading from '../common/Heading'
import Back from '../common/Back'
import './appointment.css'

const Appointment = () => {
    return (
        <>
            <Back title='Appointment'/>
            <div className="appointment">
                <div className="container grid2 flexsm">
                    <div className="left">
                        <div className="img">
                            <img src="./img/about-2.jpg" alt="" />
                            <img src="./img/about-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <Heading title='APPOINTMENT' subtitle='Make An Appointment To Pass Test & Get A License On The First Try'/>
                        <form className='appoint-in'>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointment
